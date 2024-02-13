"use client";

import Modal from "@carbon/react/lib/components/Modal/Modal";
import { useState } from "react";
import { PokemonCard } from "@/app/_types/types";
import styles from "@/app/_components/preview/preview.module.scss";
import { SearchLocate } from "@carbon/icons-react";

interface PreviewProps {
	pokemon: PokemonCard;
}

export default function Preview({ pokemon }: PreviewProps) {
	const [open, setOpen] = useState(false);

	const handleOpenModal = () => {
		setOpen(true);
	};

	const handleCloseModal = () => {
		setOpen(false);
	};

	return (
		<>
			<span onClick={handleOpenModal} className={styles.previewButton}>
				<SearchLocate />
			</span>
			<Modal
				open={open}
				passiveModal
				onRequestClose={handleCloseModal}
				modalHeading={pokemon.name}
			>
				<div className={styles.properties}>
					<div className={styles.property}>
						<h5>Weight:</h5>
						<p>
							{pokemon.weight.minimum} - {pokemon.weight.maximum}
						</p>
					</div>

					<div className={styles.property}>
						<h5>Height:</h5>
						<p>
							{pokemon.height.minimum} - {pokemon.height.maximum}
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
}
