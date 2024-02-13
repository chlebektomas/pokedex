import getPokemons from "@/app/_requests/get-pokemons";
import getPokemonTypes from "@/app/_requests/get-pokemons-types";
import Filters from "@/app/_components/filters/filters";
import LoadMoreButton from "@/app/_components/load-more-button/load-more-button";
import PokemonList from "@/app/_components/pokemon-list/pokemon-list";
import Container from "@/app/_components/container/container";

interface PageProps {
	searchParams: {
		favorites: string;
		search: string;
		type: string;
		page: string;
		list: string;
	};
}

export default async function Page({ searchParams }: PageProps) {
	const {
		favorites = "",
		search = "",
		type = "",
		page = "1",
		list = "",
	} = searchParams;

	const pokemonTypesPromise = getPokemonTypes();
	const pokemonsDataPromise = getPokemons({
		favorites,
		search,
		type,
		page,
	});

	const [pokemonTypes, pokemonsData] = await Promise.all([
		pokemonTypesPromise,
		pokemonsDataPromise,
	]);

	const pokemons = pokemonsData.edges;

	return (
		<Container>
			<Filters pokemonTypes={pokemonTypes} />
			<PokemonList pokemons={pokemons} list={!!list} />
			{pokemonsData.count > pokemonsData.limit && <LoadMoreButton />}
		</Container>
	);
}
