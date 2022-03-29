import { Stack, HStack, Box, Text } from "@chakra-ui/react"
import { ButtonPagination } from "./ButtonPagination"

interface PaginationProps{
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?:number;
    onChangePage:(page: number) => void;
}

export function Pagination({
    totalCountOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onChangePage

}:PaginationProps):JSX.Element{
    const lastPage = Math.floor(totalCountOfRegisters/ registersPerPage)
    const siblingsCount = 1
    {console.log('xx',lastPage)}
    
    function generatePagesArray(from:number, to:number){
        return [...new Array(to - from)]
        .map((_, index)=>{
            return from + index + 1
        })
        .filter(page => page > 0)

    }

    const previusPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPages = currentPage < lastPage 
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

    return(
        <Stack
        direction={["column","row"]}
        justify='space-between'
        spacing='6'
        mt='8'
        align='center'
        >
            <Box>
                <strong>0</strong> -  <strong>10</strong> de  <strong>100</strong>
            </Box>
            <HStack spacing='2'>


               {currentPage >(1+ siblingsCount) &&(
                   <>
                   <ButtonPagination   num={1} /> 
                   {currentPage >(2 + siblingsCount ) && <Text color='gray.300' textAlign='center' w='8'>...</Text>}
                   </>
               )}
                {previusPages.length > 0 && previusPages.map( page =>{
                    return  <ButtonPagination  key={page} num={page} />
                })}

                <ButtonPagination num={currentPage} isCurrent />

                {nextPages.length > 0 && nextPages.map( page =>{
                    return  <ButtonPagination  key={page} num={page} />
                })}

                {( currentPage + siblingsCount)<lastPage &&(
                    <>
                     {(currentPage + 1 + siblingsCount )< lastPage && <Text color='gray.300' textAlign='center' w='8'>...</Text>}
                     <ButtonPagination   num={lastPage} />  
                    </>

                ) }
               
            </HStack>
        </Stack>
    )
}