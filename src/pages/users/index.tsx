import {Box, Button, Checkbox, Flex, Heading, Icon, Table, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner, Tbody} from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import {SideBar} from '../../components/Sidebar'
import { useQuery } from 'react-query'


export default function UserList(): JSX.Element {
    const {data, isLoading, error} = useQuery('users', async ()=>{

        const res = await fetch('http://localhost:3000/api/users')
        const data = await res.json()
        const users = data.users.map(user => (
         {
            id: user.id,
            name: user.name,
            email: user.email,
            date: new Date(user.createAt).toLocaleDateString('pt-br',{
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            })

        }))
        return users
    })


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })




 return (
     <Box>
         <Header />
         <Flex w='100%' my='6' maxWidth={1280} mx='auto' px='6'>
             <SideBar />
             <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                 <Flex mb='8' justify='space-between' align='center'>
                     <Heading fontSize='lg' fontWeight='normal'>Users</Heading>
                     <Link href='/users/create' passHref>
                     <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}>
                         create new user
                     </Button>
                     </Link>

                 </Flex>
                 {isLoading ? (
                     <Flex justify='center'>
                         <Spinner/>
                     </Flex>
                 ): error ? (
                    <Flex justify='center'>
                        <Text>falha no carregamento dos dadoss</Text>
                    </Flex>
                 ): 
                 (
                    <>
                     <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4','4','6']} color='gray.300' w='8'>
                                    <Checkbox  colorScheme='pink'/>
                                </Th>
                                <Th>User</Th>
                                {isWideVersion && <Th>Date of Create</Th>}
                                <Th w='8'></Th>
                            </Tr> 
                        </Thead>
                        <Tbody>
                        {data.map( user => 
                        (
                            <Tr key={user.id}>
                                <Td px={['4','4','6']}>
                                    <Checkbox  colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>{user.name}</Text>
                                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                    </Box>                                 
                                </Td>
                                {isWideVersion && <Td>{user.date}</Td>}
                                {isWideVersion &&
                                <Td>
                                <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>
                                    Edit
                                </Button>
                                </Td>
                                }
                            </Tr>
                            ))}
                        
                            
                        </Tbody>
                                          
                 </Table>
                 <Pagination />
                 </>
                 )}
             </Box>

         </Flex>
     </Box>
 ) 
}