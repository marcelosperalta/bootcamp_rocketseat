type User = {
    name: string;
    address: {
        city: string;
        state: string;
    }
}

// Retornar o texto de boas-vindas do site
function createWelcomeMessage(user: User) {
    return `Boas-vindas, ${user.name}. Cidade: ${user.address.city} - ${user.address.state}!`
}

const welcomeMessage = createWelcomeMessage({
    name: 'Marcelo',
    address: {
        city: 'Sao Paulo',
        state: 'SP'
    }
})

// Tipagem das propriedades no React

type ButtonProps = {
    title: string;
}

function Button(props: ButtonProps) {
    return (
        <button>{props.title}</button>
    )
}

function App() {
    return (
        <div>
            <Button title="Button 1" />
            <Button title="Button 2" />
            <Button title="Button 3" />
        </div>
    )
}
