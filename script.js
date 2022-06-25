// Só pode mover um disco por vez
// Cada dico deve ser passado para o topo da outra pilha
// Um disco maior não pode ficar em cima de um menor
// São três colunas iguais
// São quatro discos de largura diferentes

//pegar as torres e discos
//preciso criar evento de click pra selecionar a torre start/origem
//qndo clicar nessa torre, o disco do topo tem que ser pego
//clicar na torre destino
//verificar se tem um disco menor
//caso não tenha, a torre destino recebe o disco
//qndo todos os discos estiverem na torre end, acabou o jogo


// Criação das torres e discos 
const main = document.querySelector("main");

const section = document.createElement("section");
main.appendChild(section)

const count = document.createElement("h2");
count.innerText = "Jogadas:";
count.style.marginLeft = "20px";
count.style.marginBottom = "20px";
count.style.marginTop = "20px";
section.appendChild(count);

const win = document.createElement("h1");
win.style.marginLeft = "30px";
win.style.fontSize = "50px";
win.style.color = "red";
section.appendChild(win);

const torreStart = document.createElement("div");
torreStart.className = "todasTorres torres torres:hover";
main.appendChild(torreStart);

const torreOffSet = document.createElement("div");
torreOffSet.className = "todasTorres torres torres:hover";
main.appendChild(torreOffSet);

const torreEnd = document.createElement("div");
torreEnd.className = "todasTorres torres torres:hover";
main.appendChild(torreEnd);

const disco4 = document.createElement("p");
disco4.className = "discos disco4";
torreStart.appendChild(disco4);

const disco3 = document.createElement("p");
disco3.className = "discos disco3";
torreStart.appendChild(disco3);

const disco2 = document.createElement("p");
disco2.className = "discos disco2";
torreStart.appendChild(disco2);

const disco1 = document.createElement("p");
disco1.className = "discos disco1";
torreStart.appendChild(disco1);



//torre origem === true
let torreClique = true;

//disco do topo
let moveDisco = 0;

let contador = 0;



function selecionaTorre(event){
    
    const clickTorre = event.target.closest("DIV");
    movendoDisco(clickTorre)
}



function movendoDisco(torre){ //torre origem
    if(torreClique === true || torreClique === null){
        
        moveDisco = torre.lastElementChild
        moveDisco.style.border = "3px solid black"
        torreClique = false         
        
    } else {  //torre destino
        torreClique = true
        let destino = torre.lastElementChild

        if (destino === null){
            torre.appendChild(moveDisco)
            contador++
            moveDisco.style.border = "none"
            
        } else if(destino.clientWidth > moveDisco.clientWidth){
            torre.appendChild(moveDisco)
            contador++
            moveDisco.style.border = "none"
            
        } 
        
        if(torre.childElementCount === 4 && contador > 14){
            win.innerText = "Você venceu!"
        }
    }
    count.innerText = `Jogadas: ${contador}`   
}


main.addEventListener("click", selecionaTorre);


