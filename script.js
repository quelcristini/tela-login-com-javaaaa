var user1 = ['raquel', '24072006']; // nome e senha válidos  
function logar() {
    // verificação nome
    let usuario = document.getElementById('name').value;
    if (usuario === "") {
        document.getElementById('span-usuario').textContent = 'Nome sem dados.';
        document.getElementById('span-usuario').style.display = 'block';
        document.getElementById('span-usuario').style.color = 'red';
        return; // deve impedir a continuação do processo se não tiver nome.
    } else {
        document.getElementById('span-usuario').textContent = '';
        document.getElementById('span-usuario').style.display = 'none';
    }

    // verificação senha
    let senha = document.getElementById('password').value;
    if (senha.length < 8) {
        document.getElementById('span-senha').textContent = 'Senha Inválida. Digite ao menos 8 caracteres.';
        document.getElementById('span-senha').style.display = 'block';
        document.getElementById('span-senha').style.color = 'red';
        return; // deve impedir se a senha for mais curta que 8 caracteres
    } else {
        document.getElementById('span-senha').textContent = '';
        document.getElementById('span-senha').style.display = 'none';
    }

    // irá verificar se o nome de usuário e a senha correspondem aos valores válidos
    if (usuario === user1[0] && senha === user1[1]) {
        // Redireciona para a página logado se os dados estiverem corretos
        
        window.location.href = 'prox.html'
    } else {
        // Exibe a mensagem de erro se os dados estiverem incorretos
        document.getElementById('span-login').textContent = 'Nome de Usuário ou Senha Incorreto.';
        document.getElementById('span-login').style.display = 'block';
        document.getElementById('span-login').style.color = 'red';
        return; // deve impedir se a senha for mais curta que 8 caracteres
    }

}