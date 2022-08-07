import styled from 'styled-components';

let randomColor = Math.floor(Math.random()*16777215).toString(16);

export const InfoStWrap = styled.li`
    background-color: ${'#' + randomColor};
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 8px;
    border: 1px solid black;
`;
