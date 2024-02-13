import { Pokemon } from "@/app/_types/types";
import FavoriteButton from "@/app/_components/favorite-button/favorite-button";
import PlaySoundButton from "@/app/_components/play-sound-button/play-sound-button";
import Image from "next/image";
import styles from "@/app/_components/pokemon-detail/pokemon-detail.module.scss";

interface PokemonDetailProp {
	pokemon: Pokemon;
}

export default function PokemonDetail({ pokemon }: PokemonDetailProp) {
	const {
		id,
		name,
		image,
		types,
		maxHP,
		maxCP,
		weight,
		height,
		isFavorite,
		sound,
	} = pokemon;

	console.log("pokemon: ", pokemon.id);

	return (
		<div className={styles.pokemonDetail}>
			<div className={styles.imageWrapper}>
				<Image src={image} alt={name} sizes="100%" fill />
			</div>
			<div className={styles.info}>
				<div>
					<h1>{name}</h1>
					<p>{types.join(", ")}</p>
				</div>
				<div className={styles.actions}>
					<FavoriteButton id={id} isFavorite={isFavorite} />
					<PlaySoundButton soundSrc={sound} />
				</div>
				<div className={styles.parameters}>
					<p className={styles.hp}>HP: {maxHP}</p>
					<p className={styles.cp}>CP: {maxCP}</p>
					<p>
						Weight: {weight.minimum} - {weight.maximum}
					</p>
					<p>
						Height: {height.maximum} - {height.maximum}
					</p>
				</div>
			</div>
		</div>
	);
}
