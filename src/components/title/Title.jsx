import { Heading } from "@chakra-ui/react";
import styles from "./Title.module.scss";

const Title = ({ children }) => {
	return (
		<Heading className={styles.root} as="h1" size="2xl">
			{children}
		</Heading>
	);
};

export default Title;
