const resBtn = document.querySelector("#res-button")

const btnClicker = () => {
 axios.get("https://swapi.dev/api/planets/2")
    .then((response) => {
        console.log(response.data)
        for (let i = 0; i < response.data.residents; i++){
            axios.get('https://swapi.dev/api/planets/2')
        .then(res => {
            const residents = res.data.residents
            residents.forEach(resident => {
                axios.get(resident)
                .then((res2) => {
                    console.log(res2);
                    const characters = document.createElement('h2')
                    characters.textContent = res2.data.name
                    document.body.append(characters)
                })
            })  
        })
    
    .catch(error => {
        console.log(error)
    })
        }

resBtn.addEventListener("click", btnClicker)