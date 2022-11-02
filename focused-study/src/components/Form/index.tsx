import { useState } from 'react';
import { FormEvent } from 'react';
import {
  FormWrapper,
  FormTask,
  Fieldset,
  Label,
  Input,
  Box,
  Button
} from './style';

export const Form = () => {
  const [time, setTime] = useState('');
  const [task, setTask] = useState('');

  // event.currentTarget.setCustomValidity("Campo Obrigatório");

  const handleTime = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTime(event.currentTarget.value);
    console.log(event)
  };

  const handleTask = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    setTask(event.currentTarget.value);
  };

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    setTask('');
    setTime('');
  };

  return (
    <FormWrapper>
      <FormTask onSubmit={handleForm}>
        <Fieldset>
          <Box>
            <Label htmlFor="task">Adicione um novo estudo</Label>
            <Input
              id="task"
              type="text"
              name="task"
              value={task}
              onChange={handleTask}
              required
              aria-required="true"
            />
          </Box>
          <Box>
            <Label htmlFor="time">Tempo</Label>
            <Input
              id="time"
              type="time"
              name="time"
              value={time}
              onChange={handleTime}
              min="00:00:00"
              max="01:30:00"
              step="1"
              required
              aria-required="true"
            />
          </Box>
        </Fieldset>
        <Button type="submit">Adicionar</Button>
      </FormTask>
    </FormWrapper>
  );
};
