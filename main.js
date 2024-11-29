async function BuscarFipe() {

    const idBrand = document.getElementById('brands');
    const idModel = document.getElementById('models') // 9265/2024-1
    const idYear = document.getElementById('years') // 9265/2024-1
    // let year = document.getElementById('brand').value

    const selectedBrand = idBrand.options[idBrand.selectedIndex].value;
    const selecteModel = idModel.options[idModel.selectedIndex].value;
    const selecteYear = idYear.options[idYear.selectedIndex].value;
    
    if (selectedBrand == 80) {
        // const url = `https://parallelum.com.br/fipe/api/v1/motos/marcas/${selectedBrand}/modelos/9265/anos/2024-1`;
        const url = `https://parallelum.com.br/fipe/api/v1/motos/marcas/${selectedBrand}/modelos/${selecteModel}/anos/${selecteYear}`;

        await fetch(url).then((response) => {
            // Transforma JSON em OBJ
            return response.json();

        }).then((response) => {

            document.getElementById('brand').value = response.Marca
            document.getElementById('model').value = response.Modelo
            document.getElementById('value').value = response.Valor
            document.getElementById('fuel').value = response.Combustivel
            document.getElementById('year_factory').value = response.AnoModelo
        })

    } else {
        alert(' Deu errado ')
    }
    // Exibe o valor no console (apenas para testes)
    console.log("Valor selecionado:", selectedBrand);
    console.log("Valor selecionado:", selecteModel);
    console.log("Valor selecionado:", selecteYear);

    // console.clear()

}

// Informa o resultado da pesquisa
function toggleForm() {
    const formContainer = document.getElementById('form-container')

    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block'; // Mostra o formulário
        // alert('vc clicou!!!')
    } else {
        formContainer.style.display = 'none'; // Esconde o formulário
    }
}