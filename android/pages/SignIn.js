import React, { useState } from 'react'
import { Center, Container, NativeBaseProvider, Text, Input, Button, Icon } from 'native-base'
import { MaterialIcons } from '@native-base/icons';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = React.useState(false);

    const login = async () => {
        auth().signInWithEmailAndPassword(email,password)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    }

    return (
        <NativeBaseProvider>
            <Center>
                <Container>
                    <Text fontSize="3xl" bold underline mt="35%" color="rose.800" ml="30%">Sign In</Text>
                    <Input variant="rounded" value={email} onChangeText={txt => setEmail(txt)} placeholder="Email" mt="20" mb="5%" />
                    <Input type={show ? "text" : "password"} variant="rounded" value={password}
                        onChangeText={txt => setPassword(txt)}
                        mb="5%"
                        InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
                    <Button size="sm" colorScheme="green" pl="10" pr="10" mt="10" ml="30%" onPress={login}>
                        Sign In
                    </Button>
                </Container>
            </Center>
        </NativeBaseProvider>
    )
}