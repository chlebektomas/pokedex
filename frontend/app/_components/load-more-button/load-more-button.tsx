"use client";

import { Button } from "@carbon/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import styles from "@/app/_components/load-more-button/load-more-button.module.scss";

export default function LoadMoreButton() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleLoadMore = useCallback(() => {
		const params = new URLSearchParams(searchParams.toString());
		const currentPage = Number(params.get("page")) || 1;

		params.set("page", (currentPage + 1).toString());
		router.push(pathname + "?" + params.toString(), { scroll: false });
	}, [searchParams, router, pathname]);

	return (
		<div className={styles.loadMoreWrapper}>
			<Button
				kind="secondary"
				onClick={handleLoadMore}
				className={styles.loadMoreButton}
			>
				Load more
			</Button>
		</div>
	);
}
