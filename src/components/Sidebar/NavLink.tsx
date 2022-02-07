import { Icon, Link as CharkraLink, LinkProps as CharkraLInk, Text} from "@chakra-ui/react";

import Link from "next/link";

import {ElementType} from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends CharkraLInk {
    icon: ElementType;
    children: string;
    href: string;
   
}



export function NavLink ({icon, children, href, ...rest}: NavLinkProps):JSX.Element{
    return( 
         <ActiveLink href={href} passHref>     
            <CharkraLink display='flex' align='center' {...rest}>
                <Icon 
                as={icon}
                fontSize='20'
                />
                <Text fontWeight='medium' ml='4'>{children}</Text>
            </CharkraLink>
        </ActiveLink>
    )
}