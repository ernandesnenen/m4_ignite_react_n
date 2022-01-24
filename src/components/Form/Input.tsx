import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps{
    name:string;
    label?: string;
}

export function Input({name, label, ...rest}: InputProps){
    return(
        <FormControl>
            {!!label &&  <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name} 
                id={name}
                bgColor='gray.900'
                variant='flushed'
                focusBorderColor='pink.500'
                size='lg'
                _hover={{
                bgColor:'gray.900'
                }}
                {...rest}
            />
        </FormControl>
    )
}

