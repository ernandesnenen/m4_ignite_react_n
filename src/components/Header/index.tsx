import {Flex,  Icon,  IconButton,  useBreakpointValue} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSideBarDrawer } from '../contexts/SideBarDrawerContext'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header():JSX.Element{

    const {onOpen} = useSideBarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
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
            {!isWideVersion && (
                <IconButton
                aria-label='open navigation'
                 icon={<Icon as={RiMenuLine}/>}
                 variant='unstyled'
                 fontSize='24'
                 onClick={onOpen}
                 mr='2'
                  >

                  </IconButton>

              
            )}
            <Logo />
            {isWideVersion && <SearchBox />}      
            <NotificationNav />
            <Profile showProfile={isWideVersion} />

         

        </Flex>
    )
}
