function calcularArea(base: number, altura: number): number {
    return base * altura
}

const calcularAreaArrow = (base: number, altura: number): number => base * altura

function somar(...numeros: number[]): void {
    console.log(numeros)
}

function teste(): string | number {
    if (10 > 5) {
        return 'Dez é maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()