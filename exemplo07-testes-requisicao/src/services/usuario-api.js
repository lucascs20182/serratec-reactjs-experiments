import api from './api';

function cadastrar(email, username, senha) {
    return new Promise((resolve, reject) => {
        return api.post('/create', { email, username, senha })
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

function logar(username, senha) {
    return new Promise((resolve, reject) => {
        return api.post('/login', { username, senha })
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

export default {
    cadastrar,
    logar
}
