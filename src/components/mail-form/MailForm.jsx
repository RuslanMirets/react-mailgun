import { Button } from "@chakra-ui/react";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useToasts } from "../../hooks/useToast";
import FormField from "../form-field/FormField";
import Textarea from "../textarea/Textarea";
import styles from "./MailForm.module.scss";

const MailForm = () => {
	const toast = useToasts();

	const form = useForm();

	const onSubmit = async ({ email, subject, message }) => {
		if (!email || !subject || !message) {
			return toast({
				description: "Заполните все поля",
				status: "error",
			});
		}

		try {
			const { data } = await axios.post("/api/email", {
				email,
				subject,
				message,
			});
			toast({
				description: data.message,
				status: "success",
			});
			form.reset();
		} catch (error) {
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
		<FormProvider {...form}>
			<form
				className={styles.root}
				onSubmit={form.handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<FormField name="email" type="email" placeholder="Email" isRequired />
				<FormField name="subject" type="text" placeholder="Тема" isRequired />
				<Textarea name="message" placeholder="Сообщение" isRequired />
				<Button
					type="submit"
					colorScheme="teal"
					isLoading={form.formState.isSubmitting}
					loadingText="Отправка"
				>
					Отправить
				</Button>
			</form>
		</FormProvider>
	);
};

export default MailForm;
