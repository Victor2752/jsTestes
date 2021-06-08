let hoje = new Date()
let contador = 0;

calcula = function() {
    contador ++;

    let Informada = new Date(document.querySelector("#dataInformada").value);
    let response = document.querySelector("#response")
    const diferenca = Math.abs(hoje.getTime() - Informada.getTime());
    const days = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    console.log(days)
    console.log(hoje)
    console.log(Informada)
    console.log(contador)

    if (document.querySelector("#combo").value != "" && hoje <= Informada){
        response.innerHTML= ("faltam " + days + " para o proximo " +document.querySelector("#combo").value);
    }
    else {
        response.innerHTML = ("Por favor adicione uma data  valida");
    }

}
