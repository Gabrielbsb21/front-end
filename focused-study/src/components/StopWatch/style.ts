import styled from 'styled-components';

export const StopWatchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-area: sectionStopWatch;
`;
export const Heading = styled.h2`
  color: #fcfcfc;
  font-size: 2rem;
`;

export const Wrapper = styled.div`
  background-color: #3f4958;
  border-radius: 6px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 2rem 1rem;
`;

export const Span = styled.span`
  background-color: #5d677c;
  box-shadow: 2px 2px 4px #2b2b2b inset;
  border-radius: 6px;
  color: #fcfcfc;
  font-size: 4rem;
  font-weight: 600;
  padding: 1rem;
`;

export const Button = styled.button`
  background-color: #88BCD1;
  border-radius: 6px;
  color: #141414;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 0.5rem;
`
