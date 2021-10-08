import { Form } from "@unform/web";
import './App.css';
import Input from "./components/From/input";

const initialData = {
  email: "m@m.com",
}

function App() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>

      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" />
        <br />
        <Input type="email" name="email" />
        <br />
        <Input type="password" name="password" />
        <br />
        <button type="submit">Enviar</button>
      </Form>

    </div>
  );
}

export default App;
