import React, { useState, useRef, useEffect }from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Text } from 'react-native';
import { Image, Input } from '../../components/Login';
import { images } from '../../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../../utils/common';

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const StyledButton=styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    width:100%;
    height:45px;
    background-color: ${({selected})=>selected==1?"#0195f7":"#ffffff"};
    border-radius:14px;
`;

const StyledText=styled.Text`
    font-size:16px;
    font-weight:900;
    color: ${({selected})=>selected==1?"#ffffff":"#0195f7"};
`;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!(email && password && !errorMessage));
    }, [email, password, errorMessage]);

    const _handleEamilChange = email => {
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email.'
        );
    };
    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    };

    const _handleLoginButtonPress = () => {};

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
            <Container>
                <Image url = {images.logo} />
                <Input
                    label=""
                    value={email}
                    onChangeText={_handleEamilChange}
                    onSubmitEditing={()=> passwordRef.current.focus()}
                    placeholder="email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label=""
                    value={password}
                    onChangeText={_handlePasswordChange}
                    onSubmitEditing={_handleLoginButtonPress}
                    placeholder="password"
                    returnKeyType="done"
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <StyledButton selected={1} onPress={_handleLoginButtonPress} disabled={disabled}>
                    <StyledText selected={1}>Login</StyledText>
                </StyledButton>
                <StyledButton selected={2} onPress={()=>navigation.navigate("Register")}>
                    <StyledText selected={2}>Sign Up</StyledText>
                </StyledButton>
                {/* <Button
                    title="Login"
                    onPress={_handleLoginButtonPress}
                    disabled={disabled}
                />
                <Button
                    title="sign up"
                    onPress={() => navigation.navigate("Register")}
                    isFilled={false}
                /> */}
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default Login;