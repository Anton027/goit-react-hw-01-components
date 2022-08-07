import styled from 'styled-components';

export const FriendListWrap= styled.li`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const CheckSpanWrap = styled.span`
    min-height: 15px;
    min-width: 15px;
    background-color:${ p => p.selected ? "green" : "red"};
    border-radius: 50%;
`;