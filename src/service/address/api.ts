import { Address } from './type';

export const findAddressByCep = async (cep: string): Promise<Address> =>
    await fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => response.json());
