import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps{
    showProfile?: boolean
}

export function Profile({showProfile = true}: ProfileProps):JSX.Element{
    return(
        <Flex alignItems='center'>
                    {showProfile && (
                        <Box mr='4' textAlign='right'>
                        <Text>Francisco Ernandes</Text>
                        <Text
                        color='gray.300' fontSize='small'
                        >nenenernan@gmail.com</Text>
                    </Box>
                    )}
                    <Avatar size='md' name='Ernandes Castro'/>
        </Flex>
    )
}