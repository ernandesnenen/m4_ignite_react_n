import { Stack, HStack, Box } from "@chakra-ui/react"
import { ButtonPagination } from "./ButtonPagination"

export function Pagination():JSX.Element{
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
                <ButtonPagination num={1} isCurrent />
                <ButtonPagination num={2} />
                <ButtonPagination num={4} />
                <ButtonPagination num={5} />
                <ButtonPagination num={6} />
            </HStack>
        </Stack>
    )
}