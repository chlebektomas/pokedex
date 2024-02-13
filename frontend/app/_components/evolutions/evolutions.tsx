import getPokemonById from "@/app/_requests/get-pokemon-by-id";
import PokemonList from "@/app/_components/pokemon-list/pokemon-list";
import styles from "@/app/_components/evolutions/evolutions.module.scss";
import { Evolutions } from "@/app/_types/types";

interface EvolutionsSectionProps {
	evolutions: Evolutions;
}

export default async function EvolutionsSection({
	evolutions,
}: EvolutionsSectionProps) {
	const evolutionsIds = evolutions.map((evolution) => {
		return evolution.id;
	});

	if (evolutionsIds.length === 0) {
		return null;
	}

	const evolutionsData = await Promise.all(
		evolutionsIds.map(async (id) => {
			const pokemon = await getPokemonById(id);
			return pokemon;
		})
	);

	return (
		<div className={styles.evolutionsSection}>
			<h2 className={styles.title}>Evolutions</h2>
			<PokemonList pokemons={evolutionsData} list={false} />
		</div>
	);
}
