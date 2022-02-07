import { Stack } from "@chakra-ui/react";
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import{ RiDashboardLine,  RiGitMergeLine,  RiInputMethodLine, RiUserLine} from 'react-icons/ri'


export function SideBarNav(){
    return(
        <Stack spacing='12' align='flex-start'>
               <NavSection title='GERAL'>
                    <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
                    <NavLink icon={RiUserLine} href='/users'>Users</NavLink>
               </NavSection>
               <NavSection title=' AUTOMAÇÃO'>
                    <NavLink icon={RiInputMethodLine} href='/forms'>Forms</NavLink>
                    <NavLink icon={RiGitMergeLine} href='/atomacao' >Automation</NavLink>
               </NavSection>                
            </Stack>
    )
}