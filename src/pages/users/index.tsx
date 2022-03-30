import {Box,
     Button,
      Checkbox,
       Flex, Heading,
        Icon,
         Table,
          Td,
           Th,
            Thead,
             Tr,
              Text,
               useBreakpointValue,
                Spinner,
                 Tbody,
                 Link as ChakraLink
                } from '@chakra-ui/react'
import  Link from 'next/link'
import { useState } from 'react'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import {SideBar} from '../../components/Sidebar'
import { api } from '../../services/api'


import { useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'


export default function UserList(): JSX.Element {
    const [page , setPage] = useState(1)
    const {data, isLoading, isFetching, error} = useUsers(page)
   

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


 async function handlePrefetchUser(userId){
   await queryClient.prefetchQuery(['user', userId], async() => {
    const response = await api.get(`users/${userId}`)
    return response.data
   },{staleTime: 1000 * 60 * 10})
 }

 return (
     <Box>
         <Header />
         <Flex w='100%' my='6' maxWidth={1280} mx='auto' px='6'>
             <SideBar />
             <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                 <Flex mb='8' justify='space-between' align='center'>
                     <Heading fontSize='lg' fontWeight='normal'>
                         Users
                         {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4px'/>}
                         </Heading>
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
                        {data.users.map( user => 
                        (
                            <Tr key={user.id}>
                                <Td px={['4','4','6']}>
                                    <Checkbox  colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <ChakraLink 
                                        color='purple.400'
                                        onMouseEnter={()=> handlePrefetchUser(user.id)}
                                        >
                                            <Text fontWeight='bold'>{user.name}</Text>
                                        </ChakraLink>
                                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                    </Box>                                 
                                </Td>
                                {isWideVersion && <Td>{user.createAt}</Td>}
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
                 <Pagination
               
                 totalCountOfRegisters={data.totalCount}
                 currentPage={page}
                 onChangePage={setPage}
                 />
                 </>
                 )}
             </Box>

         </Flex>
     </Box>
 ) 
}