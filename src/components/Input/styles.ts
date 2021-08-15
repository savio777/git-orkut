import { TextInput } from "react-native";

import styled from "styled-components/native";
import { color } from "../../core/helpers";

export const Container = styled(TextInput)`
  background-color: #fff;
  width: 100%;
  height: 40px;
  padding: 5px;

  border-width: 0.5px;
  border-color: ${color.gray6};
`;
