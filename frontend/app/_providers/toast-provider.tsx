"use client";

import React from "react";
import Toast from "../_components/toast/toast";
import ToastContext from "../_contexts/toast-context";
import useToast from "../_hooks/useToast";

export default function ToastProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { toastMessage, toastVisible, showToast, hideToast } = useToast();

	return (
		<ToastContext.Provider value={{ showToast, hideToast }}>
			{children}
			<Toast
				message={toastMessage}
				visible={toastVisible}
				onClose={hideToast}
			/>
		</ToastContext.Provider>
	);
}
