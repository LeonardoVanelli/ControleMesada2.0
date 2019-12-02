import styled from 'styled-components/native';

import CheckBoxComp from '../../components/CheckBox';

export const Container = styled.ScrollView``;

export const Logo = styled.Text`
  align-self: center;
  margin-top: 30px;
  width: 227px;

  font-family: RibeyeMarrow-Regular;
  font-size: 41px;
  line-height: 43px;
  text-align: center;

  color: #46819d;
`;

export const Form = styled.View`
  margin: 0 20px;
`;

export const ExistentAccount = styled.TouchableOpacity`
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
  text-decoration-line: underline;
`;

export const CheckBox = styled(CheckBoxComp)`
  padding-bottom: 20px;
`;
