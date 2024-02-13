import { getClient } from "@/app/_lib/apollo-client";
import { gql } from "@apollo/client";

const GET_POKEMON_TYPES = gql`
	query GetPokemonTypes {
		pokemonTypes
	}
`;

export default async function getPokemonTypes() {
	try {
		const { data } = await getClient().query({ query: GET_POKEMON_TYPES });
		const types: string[] = [...data.pokemonTypes];

		const sortedTypes = types.sort((a, b) => a.localeCompare(b));

		return sortedTypes;
	} catch (error) {
		console.error("Error fetching pokemon types:", error);
		throw error;
	}
}
