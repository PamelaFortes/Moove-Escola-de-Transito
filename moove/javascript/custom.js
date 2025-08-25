tinymce.init({
    selector: '#meu-editor', // ID do campo de texto
    menubar: false,
    plugins: 'image', // Plugin de imagem
    toolbar: 'bold italic | image | customgif', // Adiciona a opção 'customgif' na barra de ferramentas
    setup: function (editor) {
        // Cria um botão na barra de ferramentas
        editor.ui.registry.addButton('customgif', {
            text: 'Inserir GIF',
            onAction: function () {
                var url = prompt('Digite a URL do GIF:');
                if (url) {
                    // Insere o GIF no editor
                    editor.insertContent('<img class="gif-uma-vez" src="' + url + '" />');
                }
            }
        });
    },
    content_style: `
        .gif-uma-vez {
            animation: playOnce 1s forwards; /* A animação vai durar 1 segundo e a imagem vai ficar visível após isso */
        }

        @keyframes playOnce {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
    `
});

// Substituir o GIF por uma imagem estática após a execução
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('img.gif-uma-vez').forEach(function (gif) {
        gif.addEventListener('load', function () {
            setTimeout(function () {
                // Substitui o GIF por uma imagem estática
                gif.src = "URL_DA_IMAGEM_ESTATICA.png"; // Coloque aqui o link da imagem estática
            }, 1000); // Aguarda 1 segundo (ou o tempo necessário para o GIF rodar completamente)
        });
    });
});
