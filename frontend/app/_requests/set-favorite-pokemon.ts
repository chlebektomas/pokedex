"use server";

import { getClient } from "@/app/_lib/apollo-client";
import { gql } from "@apollo/client";
import { revalidatePath } from "next/cache";

const FAVORITE_POKEMON = gql`
	mutation FavoritePokemon($id: ID!) {
		favoritePokemon(id: $id) {
			id
		}
	}
`;

export default async function setFavoritePokemon(id: string) {
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
