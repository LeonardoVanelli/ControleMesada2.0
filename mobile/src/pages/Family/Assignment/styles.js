import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const LoadingIndicator = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Body = styled.View`
  flex: 1;
`;

export const Item = styled.View`
  padding: 9px 0;
`;

export const ItemName = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  flex: 1;
  padding-right: 12px;

  color: ${props =>
    props.disabled
      ? 'rgba(255, 255, 255, 0.22);'
      : 'rgba(255, 255, 255, 0.74);'};
`;

export const Value = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  color: ${props =>
    props.disabled
      ? 'rgba(255, 255, 255, 0.22);'
      : 'rgba(255, 255, 255, 0.74);'};
`;

export const DataItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Line = styled.View`
  height: 1px;
  width: 85%;
  align-self: center;
  background: ${props =>
    props.disabled
      ? 'rgba(255, 255, 255, 0.22);'
      : 'rgba(255, 255, 255, 0.8);'};
`;

export const Footer = styled.View`
  padding: 0 18px;
  margin: 18px 0;
`;

export const NotAssignments = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NotAssignmentsText = styled.Text`
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  font-size: 20px;
`;
