import React from "react";
import styles from "./pokemon-list.module.scss";
import PokemonCard from "../pokemon-card/pokemon-card";
import { PokemonCard as PokemonCardType } from "@/app/_types/types";

interface PokemonListProps {
	pokemons: PokemonCardType[];
	list: boolean;
}

export default function PokemonsList({ pokemons, list }: PokemonListProps) {
	return (
		<div className={list ? styles.pokemonList : styles.pokemonGrid}>
			{pokemons.map((pokemon) => {
				return (
					<PokemonCard
						key={pokemon.id}
						pokemon={pokemon}
						list={list}
					/>
				);
			})}
		</div>
	);
}
