import { Button } from "@chakra-ui/react";



interface ButtonPaginationProps{
    num: number;
    isCurrent?: boolean;
    onPageChange: (page :number)=> void
}

export function ButtonPagination({num, isCurrent = false, onPageChange}: ButtonPaginationProps):JSX.Element{

if(isCurrent){
    return(
        <Button
        size='sm'
        fontSize='xs' 
        w='4'
        colorScheme='pink'
        disabled
        _disabled={{
            bg:'pink.700',
            cursor:'default'   
        }}
        >
            {num}
        </Button>
    )
}
    return(

        <Button
        size='sm'
        fontSize='xs' 
        w='4'           
        bg='gray.700'
        _hover={{
        bg:'gray.500'
        }}
        onClick={()=> onPageChange(num)}
        >
            {num}
        </Button>
        )



}
