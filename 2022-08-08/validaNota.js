let nota1 = parseFloat(prompt("Digite a nota do primeiro bimestre"));
while(isNaN(nota1) || nota1 < 0 || nota1 > 50){
    alert("Nota inválida, tente novamente!");
    nota1 = nota1 = parseFloat(prompt("Digite a nota do primeiro bimestre"));
}
let nota2 = parseFloat(prompt("Digite a nota do segundo bimestre"));
while(isNaN(nota2) || nota2 < 0 || nota2 > 50){
    alert("Nota inválida, tente novamente!");
    nota2 = parseFloat(prompt("Digite a nota do segundo bimestre"));
}

let soma = nota1 + nota2;

if(soma >= 60){
    document.write(`<p><span style='color:blue'>APROVADO</span> com ${soma} pontos.</p>`);
    document.write(`<p>Nota média entre os bimestres: ${soma.toFixed(2)}.</p>`);
}else{
    document.write(`<p>Nota final: ${soma} pontos.</p>`);
    document.write(`<p>Situação: <span style='color:red'>REPROVADO.</span></p>`);
    document.write(`<p>Faltou(ram) ${60-soma} pontos para você ser aprovado.</p>`);
    document.write(`<p>Nota média entre os bimestres: ${(soma/2).toFixed(2)}.</p>`);
}