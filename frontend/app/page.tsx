import Link from "next/link";
import Container from "@/app/_components/container/container";
import styles from "@/app/page.module.scss";

export default async function Page() {
	return (
		<Container>
			<div className={styles.page}>
				<h1>👋 Welcome to a pokedex clone</h1>
				<p>Created by Tomas Chlebek</p>
				<Link href="/pokemons">Start browsing</Link>
			</div>
		</Container>
	);
}
