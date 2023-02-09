import { useToast as useChakraToast } from "@chakra-ui/react";

export const useToasts = () => {
	const chakraToast = useChakraToast();

	const toast = ({ description, status }) => {
		return chakraToast({
			position: "bottom-left",
			title: status === "success" ? "Успех" : "Ошибка",
			description: description,
			status: status,
			duration: 4000,
			isClosable: true,
		});
	};

	return toast;
};
