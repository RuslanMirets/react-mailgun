import { Input } from "@chakra-ui/react";

const FormField = ({ onChange, type, placeholder, isRequired }) => {
	return (
		<Input
			onChange={onChange}
			type={type}
			variant="flushed"
			focusBorderColor="teal.600"
			placeholder={placeholder}
			isRequired={isRequired}
			errorBorderColor="crimson"
		/>
	);
};

export default FormField;
