import styles from "@/app/_components/container/container.module.scss";

interface ContainerProps {
	children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
	return <div className={styles.container}>{children}</div>;
}
