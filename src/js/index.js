const listaSelecaoMangas = document.querySelectorAll(".manga")

listaSelecaoMangas.forEach(manga => (
    manga.addEventListener("click", () =>{

        esconderCartaoManga();

        mostrarCartaoManga(manga);

        
    })
)
)

function mostrarCartaoManga(manga) {
    const idMangaSelecionado = manga.attributes.id.value;
    const idDoCartaoMangaParaAbrir = "cartao-" + idMangaSelecionado;
    const cartaoMangaParaAbrir = document.getElementById(idDoCartaoMangaParaAbrir);
    cartaoMangaParaAbrir.classList.add("aberto");
}

function esconderCartaoManga() {
    const cartaoMangaAberto = document.querySelector(".aberto");
    cartaoMangaAberto.classList.remove("aberto");
}