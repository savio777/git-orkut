import styled from "styled-components/native";
import { color } from "../../core/helpers";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${color.blueLight1};
  padding: 15px;
`;

export const ContainerPrincipal = styled.View`
  background-color: #fff;
  align-items: center;
  width: 100%;
  height: 60%;
  padding: 5px;
`;

export const ContainerForm = styled.View`
  background-color: ${color.blueLight2};
  width: 100%;
  padding: 10px;
`;

export const TextInform = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #000;
  font-size: 16px;
  margin-bottom: 10px;
`;
