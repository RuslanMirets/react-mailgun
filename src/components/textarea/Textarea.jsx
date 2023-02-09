import { Textarea as ChakraTextarea } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const Textarea = ({ name, placeholder, onChange, isRequired }) => {
	const { register } = useFormContext();

	return (
		<ChakraTextarea
			{...register(name)}
			name={name}
			onChange={onChange}
			variant="flushed"
			focusBorderColor="teal.600"
			resize="vertical"
			placeholder={placeholder}
			isRequired={isRequired}
		/>
	);
};

export default Textarea;
