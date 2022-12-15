export const moneyMask = (value: string): string => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '');

    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(parseFloat(value) / 10);
};
