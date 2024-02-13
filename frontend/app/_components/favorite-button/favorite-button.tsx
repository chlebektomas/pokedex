"use client";

import { Favorite, FavoriteFilled } from "@carbon/icons-react";
import setFavoritePokemon from "@/app/_requests/set-favorite-pokemon";
import setUnFavoritePokemon from "@/app/_requests/set-un-favorite-pokemon";
import styles from "@/app/_components/favorite-button/favorite-button.module.scss";
import { useContext } from "react";
import ToastContext from "@/app/_contexts/toast-context";

interface FavoriteButtonProps {
	id: string;
	isFavorite: boolean;
}

export default function FavoriteButton({
	id,
	isFavorite,
}: FavoriteButtonProps) {
	const { showToast } = useContext(ToastContext);

	const handleChangeFavorite = async () => {
		if (isFavorite) {
			await setUnFavoritePokemon(id);
			showToast("Removed from favorites!");
		} else {
			await setFavoritePokemon(id);
			showToast("Added to favorites!");
		}
	};

	return (
		<div
			key={id}
			onClick={handleChangeFavorite}
			className={styles.favoriteButton}
		>
			{isFavorite ? <FavoriteFilled /> : <Favorite />}
		</div>
	);
}
