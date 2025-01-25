var nombre = prompt("Tu nombre");
var edad = Number(prompt("Edad"))

if (isNaN(edad)){
    console.log("Error")
    console.log("TienesError")

}else if (edad <18){
    console.log("No puedes ir a este cine "+ nombre)
}else{
    console.log("Si puedes ir a este cine " + nombre)
}