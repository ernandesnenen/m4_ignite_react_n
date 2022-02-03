import {Box, Button, Checkbox, Flex, Heading, Icon, Table, Td, Th, Thead, Tr, Text, useBreakpointValue} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import {SideBar} from '../../components/Sidebar'

export default function UserList(): JSX.Element {
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
                     <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}>
                         create new user
                     </Button>

                 </Flex>
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
                         <Tr>
                             <Td px={['4','4','6']}>
                                <Checkbox  colorScheme='pink'/>
                             </Td>
                             <Td>
                                <Box>
                                    <Text fontWeight='bold'>Ernandes Castro</Text>
                                    <Text fontSize='sm' color='gray.300'>nenenernan@gmail.com</Text>
                                </Box>                                 
                             </Td>
                             {isWideVersion && <Td>04 de abril, 2022</Td>}
                             {isWideVersion &&
                             <Td>
                             <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>
                                Edit
                             </Button>
                             </Td>
                             }
                         </Tr>
                         {/* ------------------------------------------------------------------------- */}
                         <Tr>
                             <Td px={['4','4','6']}>
                                <Checkbox  colorScheme='pink'/>
                             </Td>
                             <Td>
                                <Box>
                                    <Text fontWeight='bold'>Ernandes Castro</Text>
                                    <Text fontSize='sm' color='gray.300'>nenenernan@gmail.com</Text>
                                </Box>                                 
                             </Td>
                            {isWideVersion && <Td>04 de abril, 2022</Td>}
                            {isWideVersion &&
                             <Td>
                             <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>
                                Edit
                             </Button>
                             </Td>
                             }
                         </Tr>
                     </Thead>
                 </Table>
                 <Pagination />
             </Box>

         </Flex>
     </Box>
 ) 
}