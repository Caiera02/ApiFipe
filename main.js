async function BuscarFipe() {

    const idBrand = document.getElementById('brand').value
    //testnado
    const url =`https://parallelum.com.br/fipe/api/v1/motos/marcas/${idBrand}/modelos/9265/anos/2024-1`;
    // const url = `https://parallelum.com.br/fipe/api/v1/motos/marcas/`+ idBrand+`/modelos/9265/anos/2024-1`

    await fetch(url).then((response) => {
        // Transforma JSON em OBJ
        return response.json();

    }).then((response) => {

        document.getElementById('brand').value= response.Marca
        document.getElementById('model').value= response.Modelo
        document.getElementById('value').value = response.Valor
        document.getElementById('fuel').value = response.Combustivel
        document.getElementById('year_factory').value = response.AnoModelo
    })
}