import {Box, Stack} from '@chakra-ui/react'
import{ RiDashboardLine,  RiGitMergeLine,  RiInputMethodLine, RiUserLine} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
export function SideBar(): JSX.Element{
    return(
        <Box as='aside' w='64' ml='8'>
            <Stack spacing='12' align='flex-start'>
               <NavSection title='GERAL'>
                    <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink icon={RiUserLine}>Users</NavLink>
               </NavSection>
               <NavSection title=' AUTOMAÇÃO'>
                    <NavLink icon={RiInputMethodLine}>Forms</NavLink>
                    <NavLink icon={RiGitMergeLine}>Automation</NavLink>
               </NavSection>                
            </Stack>
        </Box>
    )

}