import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from "next/link";


export default function CreateUser():JSX.Element {
    return(
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1280} mx='auto' px='8'>
                <SideBar />
                <Box flex='1' borderRadius={8} bg='gray.800' p={['6','8']}> 

                <Heading size='lg' fontWeight='normal'>Create User</Heading>
                <Divider  my='6' borderColor='gray.700'/>

                <VStack spacing={['6','8']}>
                    <SimpleGrid spacing='8' minChildWidth='240px' w='100%'>
                        <Input name='name' label="Name"/>
                        <Input name='email' type='email' label="E-mail"/>
                    </SimpleGrid>

                    <SimpleGrid spacing={['6','8']} minChildWidth='240px' w='100%'>
                        <Input name='password' type='password'label="Password"/>
                        <Input name='password_confirmation' type='password' label="password_confirmation"/>
                    </SimpleGrid>
                </VStack>
                
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/dashboard'passHref>
                            <Button as='a' colorScheme='whiteAlpha'>Cancel</Button>
                            </Link>
                            <Button colorScheme='pink'>Save</Button>
                        </HStack>
                    </Flex>


                </Box>
            </Flex>
        </Box>
    )
}