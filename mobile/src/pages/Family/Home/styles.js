import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 18px;
`;

export const Assignments = styled.View`
  height: 150px;
`;

export const Footer = styled.View``;

export const Cards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 18, paddingLeft: 9 },
})``;
