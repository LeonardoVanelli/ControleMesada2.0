import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px;
  background: rgba(255, 255, 255, 0.07);
  margin-bottom: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  font-family: Roboto;
  font-size: 12px;
  line-height: 11px;

  color: rgba(255, 255, 255, 0.54);
`;

export const Time = styled.Text`
  font-family: Roboto;
  font-size: 12px;
  line-height: 11px;
  text-align: right;

  color: rgba(255, 255, 255, 0.54);
`;

export const Body = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;

export const AssignmentName = styled.Text`
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;
