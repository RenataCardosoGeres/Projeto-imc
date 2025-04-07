function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    const resultado = document.getElementById("resultado");
  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.innerHTML = "<p><strong>Resultado:</strong><br>Preencha os campos corretamente.</p>";
      return;
    }
  
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    let classificacao = "";
  
    if (imc < 18.5) {
      classificacao = "Baixo peso";
    } else if (imc <= 24.99) {
      classificacao = "Peso normal";
    } else if (imc <= 29.99) {
      classificacao = "Sobrepeso";
    } else if (imc <= 34.99) {
      classificacao = "Obesidade grau I";
    } else if (imc <= 39.99) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }
  
    resultado.innerHTML = `
      <p><strong>Resultado:</strong><br>
      Seu IMC é ${imcFormatado}<br>
      Classificação: ${classificacao}</p>
    `;
  }