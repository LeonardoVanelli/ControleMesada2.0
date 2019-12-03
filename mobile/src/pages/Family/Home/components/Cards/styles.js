import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 18, paddingLeft: 9 },
  overScrollMode: 'never',
})``;
