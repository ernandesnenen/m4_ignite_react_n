import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme} from "@chakra-ui/react";

import { SideBar } from "../components/Sidebar";
import { Header } from "../components/Header";

const  Chart = dynamic(() => import('react-apexcharts'),{
    ssr:false
})

export default function DashBoard(){
    const options={
        chart:{
            toolbar:{
                show:false
            },
            zoom:{
                enabled: false
            },
            foreColor: theme.colors.gray[500],
        },

        grid:{
            show:false
        },
        dataLabels:{
            enabled: false
        }, 
        tooltip:{
            enabled: false
        },
        xaxis:{
            type:'datetime',
            axisBorder:{
                color: theme.colors.gray[600]
            },
            axisTicks:{
                color: theme.colors.gray[600]
            },
            categories:[
                '2022-01-10T00:00:00.000Z',
                '2022-01-11T00:00:00.000Z',
                '2022-01-12T00:00:00.000Z',
                '2022-01-13T00:00:00.000Z',
                '2022-01-14T00:00:00.000Z',
                '2022-01-15T00:00:00.000Z',
                '2022-01-16T00:00:00.000Z',
            ]
        },
        fill:{
            opacity:0.3,
            type:'gradient',
            gradient:{
                shade:'dark',
                opacityFrom: 0.8,
                opacityTo:0.3,
            }
        },

    };
    const series=[{name:'days of week', data:[12, 34, 56, 12, 78, 94, 58]}]

  
    return(
        <Flex
        direction='column'
        h='100vh'
        >
            <Header />
            <Flex
            w='100%'
            maxWidth={1280}
            my='6'
            mx='auto'
            px='6'
            >
                <SideBar />
                <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start' >
                    <Box borderRadius={8} bgColor='gray.800' p='8' pb='4'>
                        <Text>Inscritos da Semana</Text>
                        <Chart options = { options } series={series} type="area" height={160} />
                    </Box>
                    <Box borderRadius={8} bgColor='gray.800' p='8'>
                        <Text>Taxa de Abertura</Text>
                        <Chart options = { options } series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>

            </Flex>
        </Flex>
    )
}