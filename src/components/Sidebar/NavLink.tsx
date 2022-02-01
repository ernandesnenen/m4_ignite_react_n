import { Icon, Link, LinkProps as CharkraLInk, Text} from "@chakra-ui/react";

import {ElementType} from "react";

interface NavLinkProps extends CharkraLInk {
    icon: ElementType;
    children: string;
   
}



export function NavLink ({icon, children, ...rest}: NavLinkProps):JSX.Element{
    return(       
            <Link display='flex' align='center' {...rest}>
                <Icon 
                as={icon}
                fontSize='20'
                />
                <Text fontWeight='medium' ml='4'>{children}</Text>
            </Link>
    )
}