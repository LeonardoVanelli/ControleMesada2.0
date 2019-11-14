import styled from 'styled-components/native';

import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1 },
})`
  background: #18526a;
`;

export const Safe = styled.SafeAreaView`
  justify-content: space-between;
  flex: 1;
`;

export const Top = styled.View``;

export const Header = styled.View`
  align-items: center;
  margin: 20px 0;
`;

export const Logo = styled.Text`
  font-family: RibeyeMarrow-Regular;
  font-size: 14px;
  color: #fff;
`;

export const User = styled.Text`
  font-family: Roboto;
  font-size: 11px;
  line-height: 13px;
  color: rgba(255, 255, 255, 0.54);
`;

export const Session = styled.View`
  padding-left: 8px;
  padding-bottom: 4px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: rgba(255, 255, 255, 0.54);
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  margin-left: 4px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.2);
`;

export const Footer = styled.View`
  margin-bottom: 20px;
  border-bottom-color: rgba(255, 255, 255, 0.54);
  border-bottom-width: 1px;
`;

export const NavButton = styled(BaseButton)`
  flex-direction: row;
  align-items: center;
  padding: 12px 8px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  margin-left: 4px;

  color: rgba(255, 255, 255, 0.54);
`;

export const Border = styled.View`
  border-top-color: rgba(255, 255, 255, 0.54);
  border-top-width: 1px;
`;
