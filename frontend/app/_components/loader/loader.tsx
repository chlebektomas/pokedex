"use client";

import { Loading } from "@carbon/react";
import styles from "./loader.module.scss";

export default function Loader() {
	return (
		<div className={styles.loaderWrapper}>
			<Loading withOverlay />
		</div>
	);
}
