import { getClient } from "@/app/_lib/apollo-client";
import { PokemonList } from "@/app/_types/types";
import { gql } from "@apollo/client";

const GET_POKEMONS = gql`
	query GetPokemons(
		$limit: Int
		$offset: Int
		$search: String
		$filter: PokemonFilterInput
	) {
		pokemons(
			query: {
				limit: $limit
				offset: $offset
				search: $search
				filter: $filter
			}
		) {
			limit
			offset
			count
			edges {
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
	}
`;

interface getPokemonsProps {
	favorites: string;
	search: string;
	type: string;
	page: string;
}

export default async function getPokemons({
	favorites,
	search,
	type,
	page,
}: getPokemonsProps) {
	try {
		let offset = 0;
		const limitInt = Number(page) * 12;
		const isFavorite = !!favorites;

		const { data } = await getClient().query({
			query: GET_POKEMONS,
			variables: {
				limit: limitInt,
				offset,
				search,
				filter: { type, isFavorite },
			},
		});

		const pokemons: PokemonList = data.pokemons;

		return pokemons;
	} catch (error) {
		throw error;
	}
}
