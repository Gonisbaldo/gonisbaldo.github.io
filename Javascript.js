/* Função para abrir uma aba específica no painel de navegação */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    /* Obtém todos os elementos com a classe "tablinks" */
    tablinks = document.getElementsByClassName("tablinks");
    /* Remove a classe "active" de todos os links da aba atual */
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* Mostra o conteúdo da aba especificada */
    document.getElementById(tabName).style.display = "block";
    /* Adiciona a classe "active" ao link clicado */
    evt.currentTarget.className += " active";
}
