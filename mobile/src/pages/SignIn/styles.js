import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Logo = styled.Text`
  align-self: center;
  margin: 30px 0;
  height: 30%;
  width: 227px;

  font-family: RibeyeMarrow-Regular;
  font-size: 41px;
  line-height: 56px;
  text-align: center;

  color: #46819d;
`;

export const Form = styled.View`
  margin: 0 20px;
`;

export const Footer = styled.View`
  margin-bottom: 100px;
`;

export const RememberPass = styled.TouchableOpacity`
  margin-top: 12px;
`;

export const NewAccount = styled.TouchableOpacity`
  margin-top: 27px;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #b5ffff;
`;
export const TextBold = styled.Text`
  font-weight: bold;
`;
