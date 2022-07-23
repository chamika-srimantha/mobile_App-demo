import React, { useState } from 'react'
import { Center, Container, NativeBaseProvider, Text, Input, Button, Icon } from 'native-base'
import { MaterialIcons } from '@native-base/icons';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [show, setShow] = React.useState(false);

    const register = async () => {

        if (password == passwordAgain) {
            await auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async () => {
                    auth().currentUser.updateProfile(
                        {
                            displayName: username,
                            phoneNumber: phone
                        }
                    )
                })
                .then(() => {
                    Alert.alert('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }
                });
        } else {
            Alert.alert('Re enter password!');
        }
    }

    return (
        <NativeBaseProvider>
            <Center>
                <Container>
                    <Text fontSize="3xl" bold underline mt="35%" color="rose.800" ml="30%">Sign Up</Text>
                    <Input variant="rounded" value={email} onChangeText={txt => setEmail(txt)} placeholder="Email" mt="20" mb="5%" />
                    <Input variant="rounded" value={phone} onChangeText={txt => setPhone(txt)} placeholder="Phone No" mb="5%" />
                    <Input variant="rounded" value={username} onChangeText={txt => setUserName(txt)} placeholder="Username" mb="5%" />
                    <Input type={show ? "text" : "password"} variant="rounded" value={password}
                        onChangeText={txt => setPassword(txt)}
                        mb="5%"
                        InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
                    <Input type={show ? "text" : "password"} variant="rounded" value={passwordAgain}
                        onChangeText={txt => setPasswordAgain(txt)}
                        mb="5%"
                        InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password Again" />
                    <Button size="sm" colorScheme="green" pl="10" pr="10" mt="10" ml="30%" onPress={register}>
                        Sign Up
                    </Button>
                </Container>
            </Center>
        </NativeBaseProvider>
    )
}