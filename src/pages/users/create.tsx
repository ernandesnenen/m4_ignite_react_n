import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import Link from "next/link";

import { useMutation } from "react-query";

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import {yupResolver} from '@hookform/resolvers/yup'
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserProps = {
  name:string,
  email:string,
  password:string,
  password_confirmation:string,

}

const createUserFormSchema = yup.object().shape({
    name:yup.string().required('nome obrigatório'),
    email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
    password: yup.string().required('password obrigatório').min(6, 'no mínimo 6'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'as senhas precissam ser iguais')

})


export default function CreateUser():JSX.Element {
    const router = useRouter()

    const createUser = useMutation(async (user:CreateUserProps)=>{
        const res = await api.post('/users', {
            user:{
                ...user,
                created_at: new Date()
            }
        })
        return res.data.user
    },{
        onSuccess: ()=>{
            queryClient.invalidateQueries('users')
        }
    })
   
    const { register, handleSubmit, formState }= useForm({
        resolver:yupResolver(createUserFormSchema)
      })
    
      const handlecreateUser: SubmitHandler<CreateUserProps> = async (data) => {
        await createUser.mutateAsync(data)
        router.push('/users')
      }
    
      


    return(
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1280} mx='auto' px='8'>
                <SideBar />
                <Box 
                as ='form'
                flex='1'
                 borderRadius={8} 
                 bg='gray.800'
                  p={['6','8']}
                  onSubmit={handleSubmit(handlecreateUser)}
                  > 

                <Heading size='lg' fontWeight='normal'>Create User</Heading>
                <Divider  my='6' borderColor='gray.700'/>

                <VStack spacing={['6','8']}>
                    <SimpleGrid spacing='8' minChildWidth='240px' w='100%'>
                        <Input
                         name='name' 
                         label="Name"
                         error={formState.errors.name}
                         {...register('name')}
                         />
                        <Input 
                        name='email'
                         type='email'
                          label="E-mail"
                          error={formState.errors.email}
                          {...register('email')}
                          />
                    </SimpleGrid>

                    <SimpleGrid spacing={['6','8']} minChildWidth='240px' w='100%'>
                        <Input name='password'
                         type='password'
                         label="Password"
                         error={formState.errors.password}
                         {...register('password')}
                         />
                        <Input name='password_confirmation'
                         type='password'
                          label="password_confirmation"
                          error={formState.errors.password_confirmation}
                          {...register('password_confirmation')}
                          />
                    </SimpleGrid>
                </VStack>
                
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/dashboard'passHref>
                            <Button as='a' colorScheme='whiteAlpha'>Cancel</Button>
                            </Link>
                            <Button
                                type='submit'
                                colorScheme='pink'
                                isLoading={formState.isSubmitting}
                            
                            >Save</Button>
                        </HStack>
                    </Flex>


                </Box>
            </Flex>
        </Box>
    )
}