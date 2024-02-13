import getPokemonByName from "@/app/_requests/get-pokemon-by-name";
import Container from "@/app/_components/container/container";
import Evolutions from "@/app/_components/evolutions/evolutions";
import PokemonDetail from "@/app/_components/pokemon-detail/pokemon-detail";

interface PageProps {
	params: {
		name: string;
	};
}

export default async function Page({ params }: PageProps) {
	const pokemon = await getPokemonByName(params.name);

	return (
		<Container>
			<PokemonDetail pokemon={pokemon} />
			<Evolutions evolutions={pokemon.evolutions} />
		</Container>
	);
}
