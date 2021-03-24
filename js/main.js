function botao() {
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Escolha a raça do seu personagem";
    document.getElementById("h3").innerHTML = "Humano";
    document.getElementById("h4").innerHTML = "Elfo";
    document.getElementById("h5").innerHTML = "Orc";

}
function poderes(elemento) {
    console.log(elemento.value);
}
function mostrarPoderesh3() {
    document.getElementById("poderh3").innerHTML = "Velocidade - Letalidade - Atk Speed"
}
function mostrarPoderesh4() {
    document.getElementById("poderh5").innerHTML = "Roubo de vida - Cura - Regeneração de mana"

}
function mostrarPoderesh5() {
    document.getElementById("poderh4").innerHTML = "Força - Resistencia de Armadura - Resistencia Mágica"
}
function voltarh3() {
    document.getElementById("poderh3").innerHTML = "";
}


function voltarh4() {
    document.getElementById("poderh5").innerHTML = "";
}


function voltarh5() {
    document.getElementById("poderh4").innerHTML = ""
}