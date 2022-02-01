import {Flex} from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header():JSX.Element{
    return(
        <Flex 
        as='header'
        w='100%'
        maxWidth={1280}
        h='20'
        mx='auto'
        mt='4'
        px='8'
        align='center'
        >
            <Logo />
            <SearchBox />           
            <NotificationNav />
            <Profile />

         

        </Flex>
    )
}
