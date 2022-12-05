import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, RecyclerViewBackedScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={{flex: 1}} />
            <View style={styles.topArea}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>안전한 육아,</Text>
                    <Text style={styles.title}>행복한 가정지킴이</Text>
                    <Text style={styles.title}>TODOL</Text>
                </View>
            </View>

            <Spinner visible={isLoading} />
            <View style={styles.wrapper}>
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
                title="로그인" 
                onPress={() => {login(email, password)}}/>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: 'gray'}}>계정이 없으신가요?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>  회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1}} />
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
    topArea: {
        width: '80%',
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleArea: {
    },
    title:{
        color: 'white',
        fontSize: 30,
    },
    wrapper: {
        width: '80%',
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

export default LoginScreen;