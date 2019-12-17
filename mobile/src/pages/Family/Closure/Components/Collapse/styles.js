import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-bottom: 5px;
`;

export const Header = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.2);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const Body = styled(Animated.View)`
  background: rgba(255, 255, 255, 0.2);
  padding: 8px;
  padding-bottom: 17px;
`;

export const LeftContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const About = styled.View`
  justify-content: space-between;
  flex: 1;
  height: 35px;
`;

export const DayWeek = styled.Text`
  font-family: Roboto;
  font-size: 12px;

  color: rgba(255, 255, 255, 0.54);
`;

export const AmountActivities = styled.Text`
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;

export const Value = styled.Text`
  align-self: flex-end;
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;

  color: rgba(255, 255, 255, 0.54);
`;

export const Acitivity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;

  border-bottom-color: rgba(255, 255, 255, 0.32);
  border-bottom-width: 1px;
`;

export const AcitivityName = styled.Text`
  flex: 1;
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;

export const AcitivityValue = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.54);
`;
