import React from "react";

import { TextInputProps } from "react-native";
import { color } from "../../core/helpers";

import { Container } from "./styles";

const Input: React.FC<TextInputProps> = ({ ...restProps }) => (
  <Container {...restProps} placeholderTextColor={color.gray4} />
);

export default Input;
