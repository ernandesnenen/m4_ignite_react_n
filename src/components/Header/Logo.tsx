import { Text } from "@chakra-ui/react";

export function Logo():JSX.Element{
    return(
        <Text 
            fontSize='3xl' 
            letterSpacing='tight'
            fontWeight='bold'
            w='64'
            >
                Dashgo
                <Text as='span' ml='1' color='pink.500'>.</Text>
        </Text>
    )
}