const mensagem = document.getElementById('mensagem')

class Paquimetro {

    constructor (valorInserido) {
        this.valorInserido = parseFloat(document.getElementById('valor').value);
        }

    calcularTempo() {
        let valorTroco;
            if (this.valorInserido <1) {
                mensagem.textContent =  "Valor insuficiente, favor digitar um valor acima de R$1,00";
            } else if (this.valorInserido >=1 && this.valorInserido<1.75) {
                valorTroco = this.valorInserido - 1;
                mensagem.textContent = "Você pode estacionar por 30 minutos. Seu troco é: R$" + valorTroco;
            } else if (this.valorInserido >=1.75 && this.valorInserido<3) {
                valorTroco = this.valorInserido - 1.75;
                mensagem.textContent = "Você pode estacionar por 1 hora. Seu troco é: R$" + valorTroco;
            } else {
                valorTroco = this.valorInserido - 3;
                mensagem.textContent = "Você pode estacionar por 2 horas. Seu troco é: R$" + valorTroco;
            };
    }
}

function calcular() {
    const paquimetro = new Paquimetro();
    paquimetro.calcularTempo()
}