export type Attack = {
	name: string;
	type: string;
	damage: number;
};

export type PokemonDimension = {
	minimum: string;
	maximum: string;
};

export type PokemonEvolutionRequirement = {
	amount: number;
	name: string;
};

export type PokemonAttack = {
	fast: Attack[];
	special: Attack[];
};

export type Evolutions = {
	id: string;
	name: string;
}[];

export type Pokemon = {
	id: string;
	number: number;
	name: string;
	image: string;
	weight: PokemonDimension;
	height: PokemonDimension;
	classification: string;
	types: string[];
	resistant: string[];
	attacks: PokemonAttack;
	weaknesses: string[];
	fleeRate: number;
	maxCP: number;
	evolutions: Evolutions;
	evolutionRequirements: PokemonEvolutionRequirement;
	maxHP: number;
	sound: string;
	isFavorite: boolean;
};

export type PokemonCard = {
	id: string;
	name: string;
	image: string;
	types: string[];
	weight: PokemonDimension;
	height: PokemonDimension;
	isFavorite: boolean;
};

export type PokemonList = {
	limit: number;
	count: number;
	edges: PokemonCard[];
};
