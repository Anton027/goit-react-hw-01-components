import styled from 'styled-components';

export const TableHead = styled.tr`
    font-size: ${p => p.theme.fontSizes.m};
    background-color: blue;
    color: ${p => p.theme.colors.white};
    
    font-style: italic;
    border: ${p => p.theme.borders.normal};
    text-align: right;
    
`;

export const TbHeadItem = styled.th`
    padding: ${p => p.theme.space[4]}px;
    font-family: ${p => p.theme.fonts.heading};
`;

