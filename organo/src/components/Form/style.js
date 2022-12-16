import styled from 'styled-components';

export const WrapperForm = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const ContributorForm = styled.form`
  background-color: #f7f7f7;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  padding: 4rem;

  legend {
    color: #212121;
    font-size: 1.75rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .input-wrapper label {
    color: #212121;
    font-size: 1.25rem;
  }

  .input-wrapper input {
    background-color: #ffffff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 1rem 0.5rem;
  }

  button {
    background-color: #6278f7;
    border: 1px solid #6278f7;
    color: #ffffff;
    cursor: pointer;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }
`;
