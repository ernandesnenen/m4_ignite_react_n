import {Box, Button, Checkbox, Flex, Heading, Icon, Table, Td, Th, Thead, Tr, Text} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import {SideBar} from '../../components/Sidebar'

export default function UserList(): JSX.Element {
 return (
     <Box>
         <Header />
         <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
             <SideBar />
             <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                 <Flex mb='8' justify='space-between' align='center'>
                     <Heading fontSize='lg' fontWeight='normal'>Users</Heading>
                     <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}>
                         create new user
                     </Button>

                 </Flex>
                 <Table colorScheme='whiteAlpha'>
                     <Thead>
                         <Tr>
                            <Th px='6' color='gray.300' w='8'>
                                 <Checkbox  colorScheme='pink'/>
                            </Th>
                            <Th>User</Th>
                            <Th>Date of Create</Th>
                            <Th w='8'></Th>
                         </Tr> 
                         <Tr>
                             <Td>
                                <Checkbox  colorScheme='pink'/>
                             </Td>
                             <Td>
                                <Box>
                                    <Text fontWeight='bold'>Ernandes Castro</Text>
                                    <Text fontSize='sm' color='gray.300'>nenenernan@gmail.com</Text>
                                </Box>                                 
                             </Td>
                             <Td>04 de abril, 2022</Td>
                             <Td>
                             <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>
                                Edit
                             </Button>
                             </Td>
                         </Tr>
                         {/* ------------------------------------------------------------------------- */}
                         <Tr>
                             <Td>
                                <Checkbox  colorScheme='pink'/>
                             </Td>
                             <Td>
                                <Box>
                                    <Text fontWeight='bold'>Ernandes Castro</Text>
                                    <Text fontSize='sm' color='gray.300'>nenenernan@gmail.com</Text>
                                </Box>                                 
                             </Td>
                             <Td>04 de abril, 2022</Td>
                             <Td>
                             <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>
                                Edit
                             </Button>
                             </Td>
                         </Tr>
                     </Thead>
                 </Table>
             </Box>

         </Flex>
     </Box>
 ) 
}