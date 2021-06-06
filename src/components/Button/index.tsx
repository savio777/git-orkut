import React from "react";

import { Container, TextButton } from "./styles";

interface ButtonProps {
  principal?: boolean;
  children: string;
  onPress?(): void;
}

const Button: React.FC<ButtonProps> = ({
  principal = false,
  children,
  onPress,
}) => (
  <Container onPress={onPress} principal={principal}>
    <TextButton principal={principal}>{children}</TextButton>
  </Container>
);

export default Button;
