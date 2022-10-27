import { MainWrapper } from "./style";
import { Form } from "../Form";
import { Tasks } from "../Tasks";
import { StopWatch } from "../StopWatch";

export const Main = () => {
  return (
    <MainWrapper>
      <Form />
      <Tasks />
      <StopWatch />
    </MainWrapper>
  )
}
