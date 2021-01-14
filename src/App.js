import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid teal;
  margin: 0 1em;
  padding: 0.25em 1em;
  background: ${(props) => (props.primary ? 'teal' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'teal')};
  transition: all 0.25s ease-out;
  &:hover {
    filter: brightness(1.25);
  }
`

export default function App() {
  return (
    <div>
      <h1>Poject React Styling</h1>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  )
}
