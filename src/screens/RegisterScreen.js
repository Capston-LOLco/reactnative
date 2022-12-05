import React, {useContext, useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);

    const {isLoading, register} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
                <TextInput 
                style={styles.input} 
                value={name} 
                placeholder="이름" 
                onChangeText={text => setName(text)}
                />
                <TextInput 
                style={styles.input} 
                value={email} 
                placeholder="이메일" 
                onChangeText={text => setEmail(text)}
                />
                <TextInput 
                style={styles.input} 
                value={password} 
                placeholder="비밀번호"
                onChangeText={text => setPassword(text)} 
                secureTextEntry 
                />
                <Button
                color={'black'}
                title="회원가입" 
                onPress={() => {
                    register(name, email, password);
                }}/>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: 'gray'}}>계정이 있으신가요?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>  로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0400A7',
    },
    wrapper: {
        width: '80%'
    },
    input: {
        marginBottom: 12,
        borderRadius: 5,
        paddingHorizontal: 14,
        backgroundColor: 'white',
    },
    link: {
        color: 'white',
    },
})

export default RegisterScreen;