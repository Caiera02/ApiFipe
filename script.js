async function BuscarCNPJ() {

    const url = document.getElementById('CNPJ').value;
    const apiUrl = `https://open.cnpja.com/office/${url}`;

    await fetch(apiUrl).then((response) => {
        // Transforma JSON em OBJ
        return response.json();

    }).then((response) => {

        // Testando
        // console.log(response.founded)
        // console.log(response.company.members[1].person.name);
        // console.log(response.company.name);


        // document.getElementById('number').value = response.taxId
        document.getElementById('name').value = response.company.name
        document.getElementById('founded').value = response.founded
        // Members
        document.getElementById('name0').value = response.company.members[0].person.name
        document.getElementById('cargo0').value = response.company.members[0].role.text
        document.getElementById('name1').value = response.company.members[1].person.name
        document.getElementById('cargo1').value = response.company.members[1].role.text
        document.getElementById('name2').value = response.company.members[2].person.name
        document.getElementById('cargo2').value = response.company.members[2].role.text
        //Adress
        document.getElementById('address').value = response.company.address.street


        // document.getElementById('year_factory').value = response.AnoModelo
    })

}






