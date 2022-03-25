import { Flex, Button, Stack} from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import {yupResolver} from '@hookform/resolvers/yup'

type OnSignInProps = {
  email:string,
  password:string,
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  password: yup.string().required('password obrigatório'),

})

export default function Home() {
  const { register, handleSubmit, formState }= useForm({
    resolver:yupResolver(signInFormSchema)
  })

  const onSignIn: SubmitHandler<OnSignInProps> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  }

  return (
    <Flex
    w='100vw'
    h='100vh'
    align='center'
    justify='center'>
      
      <Flex
       as='form'
       onSubmit={handleSubmit(onSignIn)}
       maxW={360}
       w='100%'
       bg='gray.800'
       p='8'
       borderRadius={8}
       flexDir='column'
      
       >
        <Stack spacing='4'>
          <Input
           name='email'
            type='email'
            label='E-mail'
            error={formState.errors.email}
             {...register('email')}/>
          <Input
           name='password'
            type='password'
             label='Senha'
             error={formState.errors.password}
              {...register('password')}/>       
        </Stack>

        <Button type='submit' 
        mt='6' 
        colorScheme='pink'
        size='lg'
        isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
