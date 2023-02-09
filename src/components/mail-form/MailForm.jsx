import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useToasts } from "../../hooks/useToast";
import FormField from "../form-field/FormField";
import Textarea from "../textarea/Textarea";
import styles from "./MailForm.module.scss";

const MailForm = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const toast = useToasts();

	const onSubmit = async (e) => {
		e.preventDefault();

		if (!email || !subject || !message) {
			return toast({
				description: "Заполните все поля",
				status: "error",
			});
		}

		try {
			setLoading(true);
			const { data } = await axios.post("/api/email", {
				email,
				subject,
				message,
			});
			e.target.reset();
			setLoading(false);
			toast({
				description: data.message,
				status: "success",
			});
		} catch (error) {
			setLoading(false);
			toast({
				description:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
				status: "error",
			});
		}
	};

	return (
		<form className={styles.root} onSubmit={onSubmit}>
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
				placeholder="Тема"
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
