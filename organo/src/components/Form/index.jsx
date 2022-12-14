import { WrapperForm, ContributorForm } from './style';

export const Form = () => {
  return (
    <WrapperForm>
      <ContributorForm>
        <fieldset>
          <legend>Preencha os dados para criar o card do Piloto.</legend>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" />
          </div>
        </fieldset>
      </ContributorForm>
    </WrapperForm>
  );
};
