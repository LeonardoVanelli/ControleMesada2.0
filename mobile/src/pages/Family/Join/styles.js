import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 18px;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PasteButton = styled(BaseButton)`
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 45px;
  border-radius: 50px;
`;
