import { Stack } from "@chakra-ui/react";
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import{ RiDashboardLine,  RiGitMergeLine,  RiInputMethodLine, RiUserLine} from 'react-icons/ri'


export function SideBarNav(){
    return(
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
    )
}