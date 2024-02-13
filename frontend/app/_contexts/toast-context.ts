"use client";

import { createContext } from "react";

const ToastContext = createContext({
	showToast: (message: string) => {},
	hideToast: () => {},
});

export default ToastContext;
