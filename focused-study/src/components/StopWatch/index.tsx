import { StopWatchWrapper, Heading, Wrapper, Span, Button } from "./style"

export const StopWatch = () => {
  return (
    <StopWatchWrapper>
      <Heading>Escolha uma tarefa e inicie o Cronômetro</Heading>
      <Wrapper>
        <Span>0</Span>
        <Span>0</Span>
        <Span>:</Span>
        <Span>0</Span>
        <Span>0</Span>
      </Wrapper>
      <Button>Começar</Button>
    </StopWatchWrapper>
  )
}
