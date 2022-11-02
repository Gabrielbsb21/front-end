import styled from 'styled-components';

export const FormWrapper = styled.section`
  grid-area: sectionForm;
`;

export const FormTask = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Fieldset = styled.fieldset`
  background-color: #3f4958;
  border-radius: 8px;
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  background-color: #5d677c;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const Label = styled.label`
  color: #f0f0f0;
  font-size: 2rem;
`;

export const Button = styled.button`
  background-color: #88bcd1;
  border-radius: 6px;
  color: #141414;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 0.5rem;
`;
