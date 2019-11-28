import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(255, 255, 255, 0.1);
  flex: 1;
  margin: 0 18px;

  justify-content: space-between;
`;

export const Header = styled.View`
  margin: 0 8px;
  margin-top: 8px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-bottom-width: 1px;
`;

export const DateText = styled.Text`
  font-family: Roboto;
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 19px;

  color: rgba(255, 255, 255, 0.85);
`;

export const Footer = styled.View`
  background: rgba(255, 255, 255, 0.12);
  padding: 18px 0;
`;
export const ComplementAmountText = styled.Text`
  text-align: center;

  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  align-items: center;

  color: #89cff5;
`;
export const Amount = styled.Text`
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Assignments = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 8, paddingTop: 8 },
  showsVerticalScrollIndicator: false,
})`
  padding: 0 8px;
  padding-bottom: 13px;
`;

export const LoadingIndicator = styled.View``;

export const NotAssignments = styled.View``;
export const NotAssignmentsText = styled.Text`
  text-align: center;

  font-family: Roboto;
  font-size: 14px;
  line-height: 14px;
  align-items: center;

  color: #379bd1;
`;
