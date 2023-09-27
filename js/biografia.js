

// Función para mostrar u ocultar todas las biografías.
function toggleTodos() {
    const biografias = document.querySelectorAll('.biografia');
    biografias.forEach((biografia) => {
        const botao = biografia.querySelector('.botao');
        const conteudo = biografia.querySelector('p');
        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
            botao.innerHTML = "Mostrar Más";
            biografia.classList.remove('selecionada');
        } else {
            conteudo.style.display = "block";
            botao.innerHTML = "Mostrar Menos";
            biografia.classList.add('selecionada');
        }
    });
}

// Función de búsqueda de autor
function pesquisarAutores() {
    const termoPesquisa = document.getElementById('termo-pesquisa').value.toLowerCase();
    const biografias = document.querySelectorAll('.biografia');

    biografias.forEach((biografia) => {
        const autorNome = biografia.querySelector('h2').textContent.toLowerCase();
        if (autorNome.includes(termoPesquisa)) {
            biografia.style.display = 'block';
        } else {
            biografia.style.display = 'none';
        }
    });
}

// Función para agregar comentarios de usuarios.
function adicionarComentario(authorId) {
    const authorBio = document.getElementById(`author-bio-${authorId}`);
    const comentario = authorBio.querySelector('.comentario-input').value;
    const comentariosContainer = authorBio.querySelector('.comentarios');

    if (comentario.trim() !== '') {
        const novoComentario = document.createElement('div');
        novoComentario.textContent = comentario;
        comentariosContainer.appendChild(novoComentario);

        // Borrar campo de entrada
        authorBio.querySelector('.comentario-input').value = '';
    }
}