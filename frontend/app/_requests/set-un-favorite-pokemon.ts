"use server";

import { getClient } from "@/app/_lib/apollo-client";
import { gql } from "@apollo/client";
import { revalidatePath } from "next/cache";

const UN_FAVORITE_POKEMON = gql`
	mutation UnFavoritePokemon($id: ID!) {
		unFavoritePokemon(id: $id) {
			id
		}
	}
`;

export default async function setUnFavoritePokemon(id: string) {
	try {
		await getClient().mutate({
			mutation: UN_FAVORITE_POKEMON,
			variables: { id },
		});

		revalidatePath("/pokemons");
	} catch (error) {
		throw Error("Error removing from favorites.");
	}
}
