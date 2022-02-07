import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

// quando o component puder receber
//  numero texto ou outros tipos dentro,
//  ele terá o typo reactnode,
//  mas se ele só puder receber um outro elemento do react
//  ele será do tipo reactElement como no caso a baixo

interface ActiveLinkProsps extends LinkProps{
children: ReactElement,
shouldMatchExactHref: boolean

}

export function ActiveLink({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProsps){
    const {asPath} = useRouter()

    let isActive = false

    if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)){
        isActive= true
    }
    if(!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || (asPath.startsWith(String(rest.as)))
    )){
        isActive= true
    }
    return(
        <Link {...rest}>
            {cloneElement(children,{
                color: isActive ? 'pink.400': 'gray.50'
            })}
        </Link>
    )

}