import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 18px;
  padding-bottom: 18px;
  justify-content: space-between;
  flex: 1;
`;

export const Body = styled.ScrollView.attrs({
  contentContainerStyle: { paddingTop: 18 },
})``;

export const Session = styled.View``;

export const SessionName = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: rgba(255, 255, 255, 0.74);

  margin-top: 24px;
  padding-bottom: 5px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: 1px;
`;

export const Users = styled.View`
  margin-top: 4px;
`;

export const UserName = styled.Text`
  margin-top: 6px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: rgba(255, 255, 255, 0.54);
`;

export const LoadingIndicator = styled.View`
  flex: 1;
  justify-content: center;
`;
