import { ToastNotification } from "@carbon/react";
import styles from "@/app/_components/toast/toast.module.scss";

interface ToastProps {
	message: string;
	visible: boolean;
	onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
	if (!visible) {
		return null;
	}

	return (
		<ToastNotification
			aria-label="closes notification"
			kind="success"
			onClose={onClose}
			onCloseButtonClick={onClose}
			role="status"
			statusIconDescription="notification"
			timeout={3000}
			title={message}
			className={styles.toast}
		/>
	);
}
