import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import FormField from "../form-field/FormField";
import Textarea from "../textarea/Textarea";
import styles from "./MailForm.module.scss";

const MailForm = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const toast = useToast();

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!email || !subject || !message) {
			return toast({
				position: "bottom-left",
				title: "Ошибка",
				description: "Заполните все поля",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		}

		try {
			setLoading(true);
			const { data } = await axios.post("/api/email", {
				email,
				subject,
				message,
			});
			setLoading(false);
			toast({
				position: "bottom-left",
				title: "Успех",
				description: data.message,
				status: "success",
				duration: 4000,
				isClosable: true,
			});
		} catch (error) {
			setLoading(false);
			toast({
				position: "bottom-left",
				title: "Ошибка",
				description:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		}
	};

	return (
		<form className={styles.root} onSubmit={submitHandler}>
			<FormField
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				isRequired
				placeholder="Email"
			/>
			<FormField
				onChange={(e) => setSubject(e.target.value)}
				type="text"
				isRequired
				placeholder="Subject"
			/>
			<Textarea
				onChange={(e) => setMessage(e.target.value)}
				isRequired
				placeholder="Сообщение"
			/>
			<Button
				type="submit"
				colorScheme="teal"
				isLoading={loading}
				loadingText="Отправка"
			>
				Отправить
			</Button>
		</form>
	);
};

export default MailForm;
