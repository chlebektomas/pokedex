import Link from "next/link";
import Container from "./_components/container/container";

export default async function Page() {
	return (
		<Container>
			<h1>👋 Welcome to a pokedex clone</h1>
			<p>Created by Tomáš Chlebek</p>
			<Link href="/pokemons">Let`s go</Link>
		</Container>
	);
}
