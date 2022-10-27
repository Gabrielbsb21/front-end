import { Aside, Heading, Ul, ListItem, Typography } from "./style";

const mockTask = [
  {
    id: 1,
    task: 'Estudar React',
    time: '01:00:00'
  },
  {
    id: 2,
    task: 'Estudar Acessibilidade na web',
    time: '00:30:00'
  },
  {
    id: 3,
    task: 'Estudar JavaScript',
    time: '01:20:00'
  },

]

export const Tasks = () => {
  return (
    <Aside>
      <Heading>Estudos do dia</Heading>
      <Ul>
        {mockTask.map((item) => (
          <ListItem key={item.id}>

            <Typography>{item.task}</Typography>
            <Typography><time>{item.time}</time></Typography>
          </ListItem>
        ))}
      </Ul>
    </Aside>
  )
}
