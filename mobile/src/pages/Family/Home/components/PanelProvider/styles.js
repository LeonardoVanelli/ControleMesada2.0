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

export const Title = styled.Text`
  font-family: Roboto;
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: rgba(255, 255, 255, 0.85);
`;

export const Body = styled.View`
  flex: 1;
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

export const ShowMore = styled.TouchableOpacity`
  padding: 5px;
`;

export const ShowMoreText = styled.Text`
  text-align: center;
  color: #89cff5;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 30,
  color: '#379bd1',
})``;
