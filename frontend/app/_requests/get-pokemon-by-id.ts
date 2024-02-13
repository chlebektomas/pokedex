import { getClient } from "@/app/_lib/apollo-client";
import { PokemonCard } from "@/app/_types/types";
import { gql } from "@apollo/client";

const GET_POKEMON_BY_ID = gql`
	query GetPokemonById($id: ID!) {
		pokemonById(id: $id) {
			id
			name
			image
			types
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			isFavorite
		}
	}
`;

export default async function getPokemonById(id: string) {
	try {
		const { data } = await getClient().query({
			query: GET_POKEMON_BY_ID,
			variables: { id },
		});

		const pokemon: PokemonCard = data.pokemonById;

		return pokemon;
	} catch (error) {
		console.error("Error fetching pokemon types:", error);
		throw error;
	}
}
