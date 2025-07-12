function mensagem() {
    document.getElementById('mensagem')
}

class paquimetro {
    constructor (valorInserido) {
        this.valorInserido = parseFloat(document.getElementById('valor').value);
        }
    calcularTempo() {
        let valorTroco;
            if (valorInserido <0) {
                mensagem.textContent =  "Valor insuficiente, favor digitar um valor acima de R$1,00";
                return;
            } else if (this.valorInserido >=1 || this.valorInserido<1.75) {
                valorTroco = this.valorInserido - 1;
                mensagem.textContent = "Você pode estacionar por 30 minutos. Seu troco é: R$" + valorTroco;
            } else if (this.valorInserido >=1.75||this.valorInserido<3) {
                valorTroco = this.valorInserido - 1.75;
                mensagem.textContent = "Você pode estacionar por 1 hora. Seu troco é: R$" + valorTroco;
            } else {
                valorTroco = this.valorInserido - 3;
                mensagem.textContent = "Você pode estacionar por 2 horas. Seu troco é: R$" + valorTroco
            };
    }
}