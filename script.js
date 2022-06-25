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


let torreClique = true;

let moveDisco = 0;

let contador = 0;



function selecionaTorre(event){
    
    const clickTorre = event.target.closest("DIV");
    movendoDisco(clickTorre)
}



function movendoDisco(torre){ 
    if(torreClique === true || torreClique === null){
        
        moveDisco = torre.lastElementChild
        moveDisco.style.border = "3px solid black"
        torreClique = false         
        
    } else { 
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


