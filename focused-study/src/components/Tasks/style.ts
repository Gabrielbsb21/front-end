import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  grid-area: asideTask;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled.li`
  border-radius: 6px;
  color: #FCFCFC;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #3F4958;
  padding: 0.5rem;
`

export const Typography = styled.p`
  color: #fcfcfc;
  font-size: 1.375rem;
`

export const Heading = styled.h2`
  color: #fcfcfc;
  font-size: 2rem;
`
