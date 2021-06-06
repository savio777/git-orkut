import styled, { css } from "styled-components/native";

import { color } from "../../core/helpers";

interface ButtonProps {
  principal?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;

  padding: 7px;
  border-radius: 7px;

  ${(props) =>
    props.principal
      ? css`
          width: 80%;
          background-color: ${color.dark};
        `
      : css`
          width: 40%;
          background-color: ${color.darkGray};
        `};
`;

export const TextButton = styled.Text<ButtonProps>`
  ${(props) =>
    props.principal
      ? css`
          font-size: 16px;
          color: #fff;
        `
      : css`
          font-size: 12px;
          color: #000000;
        `}
`;
