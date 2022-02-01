import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile():JSX.Element{
    return(
        <Flex alignItems='center'>
                    <Box mr='4' textAlign='right'>
                        <Text>Francisco Ernandes</Text>
                        <Text
                        color='gray.300' fontSize='small'
                        >nenenernan@gmail.com</Text>
                    </Box>
                    <Avatar size='md' name='Ernandes Castro'/>
        </Flex>
    )
}