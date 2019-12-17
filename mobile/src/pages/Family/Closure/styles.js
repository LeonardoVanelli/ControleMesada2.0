import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 18 },
})`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 40,
  color: '#379bd1',
})``;

export const Amount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AmountText = styled.Text`
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;

export const AmountValue = styled.Text`
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;

export const About = styled.View`
  background: rgba(255, 255, 255, 0.2);
  padding: 8px;
  margin-bottom: 5px;
`;

export const User = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserText = styled.Text`
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;

export const UserName = styled.Text`
  font-family: Roboto;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.74);
`;
