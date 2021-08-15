import React from "react";

import { Image } from "react-native";

import Input from "../../components/Input";
import logo from "../../assets/orkut.png";

import {
  Container,
  ContainerPrincipal,
  ContainerForm,
  TextInform,
} from "./styles";

const Login = () => {
  return (
    <Container>
      <ContainerPrincipal>
        <Image
          source={logo}
          style={{ width: "70%", height: 70, marginVertical: 20 }}
        />
        <ContainerForm>
          <TextInform>Acesse o orkut.com com a sua conta</TextInform>
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Senha" secureTextEntry />
        </ContainerForm>
      </ContainerPrincipal>
    </Container>
  );
};

export default Login;
