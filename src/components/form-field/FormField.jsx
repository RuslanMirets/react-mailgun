import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const FormField = ({ name, onChange, type, placeholder, isRequired }) => {
	const { register } = useFormContext();

	return (
		<Input
			{...register(name)}
			name={name}
			onChange={onChange}
			type={type}
			variant="flushed"
			focusBorderColor="teal.600"
			placeholder={placeholder}
			isRequired={isRequired}
		/>
	);
};

export default FormField;
