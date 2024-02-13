"use client";

import { Close, Menu, Thumbnail_2 } from "@carbon/icons-react";
import { Dropdown, TextInput } from "@carbon/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";
import styles from "@/app/_components/filters/filters.module.scss";

interface FiltersProps {
	pokemonTypes: string[];
}

export default function Filters({ pokemonTypes }: FiltersProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const favorites = searchParams.get("favorites");
	const list = searchParams.get("list");
	const type = searchParams.get("type");
	const search = searchParams.get("search");

	const isFavoritesChecked = favorites === "true";
	const isListChecked = list === "true";
	const [searchTerm, setSearchTerm] = useState(search || "");

	const navigateWithQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);
			params.delete("page");

			router.push(pathname + "?" + params.toString());
		},
		[searchParams, router, pathname]
	);

	const navigateWithoutQueryString = useCallback(
		(name: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.delete(name);
			params.delete("page");

			router.push(
				pathname + (params.toString() ? "?" + params.toString() : "")
			);
		},
		[searchParams, router, pathname]
	);

	const handleChangeFavorites = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value === "all") {
			navigateWithoutQueryString("favorites");
		} else {
			navigateWithQueryString("favorites", "true");
		}
	};

	const handleChangeType = ({ selectedItem }: { selectedItem: string }) => {
		const value = selectedItem.toLocaleLowerCase();

		if (value === "") {
			navigateWithoutQueryString("type");
		} else {
			navigateWithQueryString("type", value);
		}
	};

	const handleClearType = () => {
		navigateWithoutQueryString("type");
	};

	const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);
	};

	const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			if (searchTerm === "") {
				navigateWithoutQueryString("search");
			} else {
				navigateWithQueryString("search", searchTerm);
			}
		}
	};

	const handleChangeView = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value === "grid") {
			navigateWithoutQueryString("list");
		} else {
			navigateWithQueryString("list", "true");
		}
	};

	return (
		<div className={styles.filtersWrapper}>
			<div className={styles.tabs}>
				<input
					id="all"
					type="radio"
					name="tabs"
					value="all"
					onChange={handleChangeFavorites}
					checked={!isFavoritesChecked}
				/>
				<label htmlFor="all">All</label>
				<input
					id="favorites"
					type="radio"
					name="tabs"
					value="favorites"
					onChange={handleChangeFavorites}
					checked={isFavoritesChecked}
				/>
				<label htmlFor="favorites">Favorites</label>
			</div>

			<div className={styles.filters}>
				<TextInput
					id={"search"}
					type="text"
					placeholder="Search"
					labelText={""}
					value={searchTerm}
					onChange={handleChangeSearch}
					onKeyDown={handleOnKeyDown}
					className={styles.search}
				/>

				<div className={styles.filterRow}>
					<div className={styles.dropdownWrapper}>
						<Dropdown
							id="type"
							label="Type"
							titleText=""
							initialSelectedItem={
								(type &&
									type?.charAt(0).toUpperCase() +
										type?.slice(1)) ||
								""
							}
							items={pokemonTypes}
							onChange={handleChangeType}
							className={styles.dropdown}
						/>
						{type && (
							<Close
								onClick={handleClearType}
								className={styles.dropdownClear}
							/>
						)}
					</div>

					<div className={styles.listing}>
						<input
							id="grid"
							type="radio"
							name="listing"
							value="grid"
							onChange={handleChangeView}
							checked={!isListChecked}
						/>
						<label htmlFor="grid">
							<Thumbnail_2 />
						</label>
						<input
							id="list"
							type="radio"
							name="listing"
							value="list"
							onChange={handleChangeView}
							checked={isListChecked}
						/>
						<label htmlFor="list">
							<Menu />
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
