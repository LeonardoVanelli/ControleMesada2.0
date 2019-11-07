import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  border-radius: 4px;
  border-bottom-width: 2px;
  border-bottom-color: #9cc3d8;
  margin-bottom: 24px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(156, 195, 216, 0.5)',
})`
  flex: 1;
  font-size: 18px;
  margin-left: 28px;
  color: #9cc3d8;
`;
