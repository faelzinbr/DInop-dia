const pesquisa = document.querySelector("#pesquisa");

const filtroAlimentacao = document.querySelector("#filtro-alimentacao");

const dinossauros = document.querySelectorAll("#dinossauros article");

const mensagemVazia = document.querySelector("#mensagem-vazia");

const filtroPeriodo = document.querySelector("#filtro-periodo");

function filtrarDinossauros() {
    const texto = pesquisa.value.toLowerCase();

    const alimentacaoSelecionada = filtroAlimentacao.value;

    const periodoSelecionado = filtroPeriodo.value;

    let encontrados = 0;

    dinossauros.forEach(function (dinossauro) {
        const nome = dinossauro
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const alimentacao = dinossauro.dataset.alimentacao;

        const periodo = dinossauro.dataset.periodo;

        const correspondeNome = nome.includes(texto);

        const correspondeAlimentacao =
            alimentacaoSelecionada === "todos" ||
            alimentacao === alimentacaoSelecionada;

            const correspondePeriodo =
    periodoSelecionado === "todos" ||
    periodo === periodoSelecionado;

        if (
    correspondeNome &&
    correspondeAlimentacao &&
    correspondePeriodo
) {
            dinossauro.style.display = "";
            encontrados++;
        } else {
            dinossauro.style.display = "none";
        }
    });

    if (encontrados === 0) {
        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }
}

pesquisa.addEventListener("input", filtrarDinossauros);

filtroAlimentacao.addEventListener("change", filtrarDinossauros);
filtroPeriodo.addEventListener("change", filtrarDinossauros);