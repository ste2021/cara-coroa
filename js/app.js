element("botaoJogar").onclick = () => {
    let jogadorCara = element("jogadorCara").value;
    let jogadorCoroa = element("jogadorCoroa").value;

    if (jogadorCara == "" || jogadorCoroa == "") {
        return alert ("Digite os nomes");
    }

    const valor = Math.random();
  
    let imagem = "";
    let nomeVencedor = "";
  
    if (valor > 0.5) {
      imagem = "coroa";
      nomeVencedor = jogadorCoroa;
    } else {
      imagem = "cara";
      nomeVencedor = jogadorCara;
    }
  
    const caminhoImagem = `images/${imagem}.jpg`;
   element("imgMoeda").src = caminhoImagem;
   alert(nomeVencedor);
  };

  function element(id){
    return document.getElementById(id);
  }

  const myElement = (id) => console.log("teste");
  myElement("teste");
  
/* function soma(numeroA, numeroB) {
    let total = numeroA + numeroB;
    return total;
}

console.log(soma(10, 25));

soma(10, 15);
soma(10, 20);

 */