export const moneyMask = (value: number): string =>
    value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

export const cepMask = (cep: string): string =>
    cep
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');

export const removeMask = (value: string): string => {
    if (value !== undefined && value != '') {
        return value.replace(/[^0-9A-Za-z]/g, '');
    }

    return '';
};

export const onlyNumbersMask = (value: string): string => value.replace(/\D/g, '');
