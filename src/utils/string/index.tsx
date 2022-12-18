export const moneyMask = (value: number): string =>
    value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
