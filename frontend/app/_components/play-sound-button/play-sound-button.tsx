"use client";

import { VolumeUpFilled } from "@carbon/icons-react";
import styles from "@/app/_components/play-sound-button/play-sound-button.module.scss";

interface PlaySoundButtonProps {
	soundSrc: string;
}

export default function PlaySoundButton({ soundSrc }: PlaySoundButtonProps) {
	const playSound = () => {
		const audio = new Audio(soundSrc);
		audio.play();
	};

	return (
		<VolumeUpFilled onClick={playSound} className={styles.soundButton} />
	);
}
