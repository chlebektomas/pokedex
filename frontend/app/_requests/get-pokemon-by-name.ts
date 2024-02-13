import { getClient } from "@/app/_lib/apollo-client";
import { Pokemon } from "@/app/_types/types";
import { gql } from "@apollo/client";

const GET_POKEMON_BY_NAME = gql`
	query GetPokemonByName($name: String!) {
		pokemonByName(name: $name) {
			id
			name
			image
			classification
			types
			sound
			resistant
			weaknesses
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			fleeRate
			evolutionRequirements {
				amount
				name
			}
			evolutions {
				id
				name
			}
			maxCP
			maxHP
			attacks {
				fast {
					name
					type
					damage
				}
				special {
					name
					type
					damage
				}
			}
			isFavorite
		}
	}
`;

export default async function getPokemonByName(name: string) {
	try {
		const { data } = await getClient().query({
			query: GET_POKEMON_BY_NAME,
			variables: { name },
		});

		const pokemon: Pokemon = data.pokemonByName;

		return pokemon;
	} catch (error) {
		console.error("Error fetching pokemon types:", error);
		throw error;
	}
}
