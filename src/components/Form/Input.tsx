import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage} from "@chakra-ui/react"
import {forwardRef, ForwardRefRenderFunction} from 'react'
import {FieldError} from 'react-hook-form'

interface InputProps extends ChakraInputProps{
    name:string;
    label?: string;
    error?: FieldError;
}

const inputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error, ...rest}, ref)=>{
    return(
        <FormControl isInvalid={!!error}>
            {!!label &&  <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                name={name} 
                id={name}
                bgColor='gray.900'
                borderColor='transparent'
                variant='outline'
                _focus={
                   {
                    bg:'gray.50',
                    color:'gray.900',
                    borderColor:'pink.500'
                    }
                }
                size='lg'
                _hover={{
                bgColor:'gray.900'
                }}
                ref={ref}
                {...rest}
            />
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(inputBase)

