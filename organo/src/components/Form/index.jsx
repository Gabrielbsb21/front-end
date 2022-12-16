import { WrapperForm, ContributorForm } from './style';

export const Form = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <WrapperForm>
      <ContributorForm onSubmit={handleForm}>
        <fieldset>
          <legend>Preencha os dados para criar o card do Piloto.</legend>
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Digite seu nome" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="job">Cargo</label>
            <input type="text" id="job" placeholder="Digite seu cargo" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="image">Imagem</label>
            <input type="file" id="image" />
          </div>
        </fieldset>
        <button type="submit">Criar Card</button>
      </ContributorForm>
    </WrapperForm>
  );
};
