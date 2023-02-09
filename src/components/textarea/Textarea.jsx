import { Textarea as TextareaChakra } from "@chakra-ui/react";

const Textarea = ({ placeholder, onChange, isRequired }) => {
	return (
		<TextareaChakra
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
