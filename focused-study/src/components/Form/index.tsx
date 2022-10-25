import { FormWrapper, Fieldset, Label, Input, Box, Button } from './style';

export const Form = () => {
  return (
    <FormWrapper>
      <Fieldset>
        <Box>
          <Label htmlFor="task">Adicione um novo estudo</Label>
          <Input id="task" type="text" />
        </Box>
        <Box>
          <Label htmlFor="time">Tempo</Label>
          <Input
            id="time"
            type="time"
            min="00:00:00"
            max="01:30:00"
            value="00:00:00"
          />
        </Box>
      </Fieldset>
      <Button>Adicionar</Button>
    </FormWrapper>
  );
};
