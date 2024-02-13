"use server";

import { getClient } from "@/app/_lib/apollo-client";
import { gql, throwServerError } from "@apollo/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const FAVORITE_POKEMON = gql`
	mutation FavoritePokemon($id: ID!) {
		favoritePokemon(id: $id) {
			id
		}
	}
`;

export default async function setFavoritePokemon(id: string) {
	// throw new Error("Error adding to favorites."); //TODO: trouble with error handling
	try {
		await getClient().mutate({
			mutation: FAVORITE_POKEMON,
			variables: { id },
		});

		revalidatePath("/pokemons");
	} catch (error) {
		throw Error("Error adding to favorites.");
	}
}
