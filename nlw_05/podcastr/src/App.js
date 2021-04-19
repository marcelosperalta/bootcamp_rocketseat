import Button from './Button';

function App() {
  return (
    <>
      <h1>Hi</h1>

      {/* props.title: */}
      {/* <Button title="Button 1" />
      <Button title="Button 2" />
      <Button title="Button 3" />
      <Button title="Button 4" />
      <Button title="Button 5" /> */}

      {/* props.children: */}
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button> 
      <Button>Button 4</Button> 
      <Button>Button 5</Button>
    </>
  );
}

export default App;