import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "@/app/_components/favorite-button/favorite-button";
import styles from "@/app/_components/pokemon-card/pokemon-card.module.scss";
import Preview from "@/app/_components/preview/preview";
import { PokemonCard as PokemonCardType } from "@/app/_types/types";

interface PokemonCardProps {
	pokemon: PokemonCardType;
	list?: boolean;
}

export default function PokemonCard({
	pokemon,
	list = false,
}: PokemonCardProps) {
	const link = `/pokemons/${pokemon.name.toLocaleLowerCase()}`;

	return (
		<div
			key={pokemon.id}
			className={list ? styles.pokemonCardList : styles.pokemonCard}
		>
			<Link href={link} className={styles.imageWrapper}>
				<Image
					src={pokemon.image}
					alt={pokemon.name}
					sizes="100%"
					priority
					fill
				/>
			</Link>
			<div className={styles.info}>
				<Link href={link}>
					<h3>{pokemon.name}</h3>
				</Link>
				<p>{pokemon.types.join(", ")}</p>
			</div>
			<div className={styles.favoriteButtonWrapper}>
				<FavoriteButton
					id={pokemon.id}
					isFavorite={pokemon.isFavorite}
				/>
			</div>
			<div className={styles.previewButtonWrapper}>
				<Preview pokemon={pokemon} />
			</div>
		</div>
	);
}
