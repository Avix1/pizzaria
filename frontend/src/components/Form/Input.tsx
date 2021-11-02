import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, Icon } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
    return(
        <FormControl>    
        { !!label && <FormLabel htmlFor={name} color="red.500" fontSize="20">{label}</FormLabel> }

        <ChakraInput 
        name={name} 
        id={name}
        type="name" 
        focusBorderColor="red.400"
        bg="gray.200"
        variant="filled"
        _hover={{
            bg:"gray.100"
        }}
        size="lg"
        {...rest}
        />

        </FormControl>
    )
}