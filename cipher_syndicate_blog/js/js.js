//let age = prompt();
//if (age > 18){
//    alert('Regular price')
//}
//else(
//    alert('discount')
//)

function check(){
    let ram = Number(prompt());
    let element = document.getElementById('results')

    if (ram > 16){
        element.textContent='Starting the game...';
    }
    else{
        element.textContent='PC upgrade neede';
    }
}