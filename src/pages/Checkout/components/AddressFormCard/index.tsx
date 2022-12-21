import { ChangeEvent, forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import { Card } from '../../../../components/ui/Card';
import styles from './index.module.css';
import { MapPinLine } from 'phosphor-react';
import { Text } from '../../../../components/ui/Text';
import { Input } from '../../../../components/ui/Input';
import { findAddressByCep } from '../../../../service/address/api';
import { cepMask, removeMask } from '../../../../utils/string';

export interface AddressForm {
    zipCode: string;
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    stateInitials: string;
}

export interface AddressFormCardRef {
    getValues: () => AddressForm | null;
}

const AddressFormCard: ForwardRefRenderFunction<AddressFormCardRef, unknown> = (_, ref) => {
    const handleChangeCep = async ({ currentTarget }: ChangeEvent<HTMLInputElement>): Promise<void> => {
        if (currentTarget.value.length < 8) return;

        try {
            const address = await findAddressByCep(removeMask(currentTarget.value));

            (document.getElementById('street') as HTMLInputElement).value = address.logradouro ?? '';
            (document.getElementById('complement') as HTMLInputElement).value = address.complemento ?? '';
            (document.getElementById('neighborhood') as HTMLInputElement).value = address.bairro ?? '';
            (document.getElementById('city') as HTMLInputElement).value = address.localidade ?? '';
            (document.getElementById('state_initials') as HTMLInputElement).value = address.uf ?? '';
        } catch (err: unknown) {
            console.error(err);
        } finally {
            (document.getElementById('cep') as HTMLInputElement).value = cepMask(currentTarget.value ?? '');
        }
    };

    const getFormValues = (): AddressForm | null => {
        const form = document.querySelector('#form-address') as HTMLFormElement;

        if (!form.reportValidity()) return null;

        const values: AddressForm = {
            zipCode: form?.cep.value ?? '',
            street: form?.street.value ?? '',
            complement: form?.complement.value ?? '',
            neighborhood: form?.neighborhood.value ?? '',
            city: form?.city.value ?? '',
            stateInitials: form?.state_initials.value ?? '',
            number: Number(form?.number.value) ?? 0,
        };

        return values;
    };

    useImperativeHandle(ref, () => ({
        getValues: getFormValues,
    }));

    return (
        <Card>
            <div className={styles.addressCard}>
                <div className={styles.addressCardTitle}>
                    <MapPinLine />

                    <div className={styles.addressCardDescription}>
                        <Text size="md" weight="regular">
                            Endereço de Entrega
                        </Text>

                        <Text size="sm" weight="regular">
                            Informe o endereço onde deseja receber seu pedido
                        </Text>
                    </div>
                </div>

                <form id="form-address" onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.addressCardForm}>
                        <div className={styles.addressCardFormRow}>
                            <Input
                                id="cep"
                                type="number"
                                placeholder="CEP"
                                maxLenght={8}
                                onChange={handleChangeCep}
                                required
                            />
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <Input id="street" placeholder="Rua" block maxLenght={50} required />
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <div className={styles.rowGrid2}>
                                <Input id="number" type="cep" placeholder="Número" maxLenght={10} required />

                                <Input id="complement" placeholder="Complemento" optional maxLenght={50} />
                            </div>
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <div className={styles.rowGrid3}>
                                <Input id="neighborhood" placeholder="Bairro" maxLenght={50} required />

                                <Input id="city" placeholder="Cidade" maxLenght={50} required />

                                <Input id="state_initials" placeholder="UF" maxLenght={2} required />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default forwardRef(AddressFormCard);
