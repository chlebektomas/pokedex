"use client";

import { useState } from "react";

export default function useToast() {
	const [toastMessage, setToastMessage] = useState("");
	const [toastVisible, setToastVisible] = useState(false);

	const showToast = (message: string) => {
		setToastMessage(message);
		setToastVisible(true);
	};

	const hideToast = () => {
		setToastVisible(false);
	};

	return { toastMessage, toastVisible, showToast, hideToast };
}
