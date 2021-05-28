const button = document.getElementById("findButton");
button.addEventListener("click", function () {
   let typedText = document.getElementById("input").value;
   let palavra = typedText.toLowerCase().split("").sort().join("").trim();
  
   getAnagramsOf(palavra)
});

// É preciso:
// fazer a contagem de letras no typedText, buscar no dicionario palavras com a mesma quantidade de letras,
// colocar as letras das palavras com mesma length na ordem alfabética, comparar se o typedText === palavras,
// retornar todas em um array.

function getAnagramsOf(palavra) {
  let output = [];
  for (let i = 0; i < palavras.length; i++) {
    let sorted = palavras[i].toLowerCase().split("").sort().join("").trim();
    if (sorted === palavra) {
      output.push(palavras[i]);
    }
  }
  showResults(output)  
}

function showResults(output) {

    let answer = document.getElementById("resposta")
    answer.value = ""
    answer.innerText = "Os anagramas encontrados para a palavra informada são: " + output + " ";

    // const newElement = document.createElement("p")
    // newElement.classname = "result";

    // const newText = document.createTextNode("Os anagramas encontrados para a palavra informada são: " + output + " ");
    // newElement.appendChild(newText); 

    // const destination = document.getElementById("resultado");
    // destination.appendChild(newElement);
}

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
    buttonFunction()
}

function buttonFunction () {

    let btn = document.getElementById("dkm");
    let currentClass = btn.getAttribute("class");
    if(currentClass == 'classA' )
    {
        btn.setAttribute("class", "classB");
        
    } else {
       btn.setAttribute("class", "classA");
              
    }
   
}

let answer = document.getElementById("resposta")
    texto.value = ""
     resposta.innerText = "Os anagramas encontrados para a palavra informada são: " + output + " ";

// });