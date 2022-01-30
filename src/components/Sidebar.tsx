import {Box, Stack, Text, Link, Icon} from '@chakra-ui/react'
import{RiContactsLine, RiDashboardLine,  RiGitMergeLine,  RiInputMethodLine} from 'react-icons/ri'
export function SideBar(): JSX.Element{
    return(
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <Box>
                    <Text
                    fontWeight='bold'
                    fontSize='small'
                    color='gray.400'

                    >
                        GERAL</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' align='center'>
                            <Icon 
                            as={RiDashboardLine}
                            fontSize='20'
                             />
                             <Text fontWeight='medium' ml='4'>Dashboard</Text>
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon 
                            as={RiContactsLine}
                            fontSize='20'
                             />
                             <Text fontWeight='medium' ml='4'>Users</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text
                    fontWeight='bold'
                    fontSize='small'
                    color='gray.400'

                    >
                        AUTOMAÇÃO</Text>
                    <Stack spacing='4' mt='8' align='stretch'>
                        <Link display='flex' align='center'>
                            <Icon 
                            as={RiInputMethodLine}
                            fontSize='20'
                             />
                             <Text fontWeight='medium' ml='4'>Foms</Text>
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon 
                            as={RiGitMergeLine}
                            fontSize='20'
                             />
                             <Text fontWeight='medium' ml='4'>Automation</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )

}