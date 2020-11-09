import api from "../src/services/api";

// Buscando usuário do GitHub
api.get("users/tgmarinho")
    .then((response) => doSomething(response.data))
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

// Enviando um Post na rota posts com os parâmetros image, title e content
// Utilizando o método HTTP POST
const response = await api.post("posts", {image, title, content});

// DELETE - Deletando um arquivo por ID
api.delete('files', { id });

// PUT - Atualizando apenas o nome
const personUpdated = await api.put(`person/${person.id}`, { name: "Thiago" });