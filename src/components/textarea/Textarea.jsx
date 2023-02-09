import { Textarea as ChakraTextarea } from "@chakra-ui/react";

const Textarea = ({ placeholder, onChange, isRequired }) => {
	return (
		<ChakraTextarea
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
