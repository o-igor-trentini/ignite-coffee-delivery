import { ChangeEvent, FC } from 'react';
import { Card } from '../../../../components/ui/Card';
import styles from './index.module.css';
import { MapPinLine } from 'phosphor-react';
import { Text } from '../../../../components/ui/Text';
import { Input } from '../../../../components/ui/Input';
import { findAddressByCep } from '../../../../service/address/api';

interface AddressFormCardProps {
    onSubmit: () => void;
}

export const AddressFormCard: FC<AddressFormCardProps> = ({ onSubmit }) => {
    const handleChangeCep = async ({ currentTarget }: ChangeEvent<HTMLInputElement>): Promise<void> => {
        if (currentTarget.value.length < 8) return;

        try {
            const address = await findAddressByCep(currentTarget.value);

            document.getElementById('street')!.value = address.logradouro ?? '';
            document.getElementById('complement')!.value = address.complemento ?? '';
            document.getElementById('neighborhood')!.value = address.bairro ?? '';
            document.getElementById('city')!.value = address.localidade ?? '';
            document.getElementById('state-initials')!.value = address.uf ?? '';
        } catch (err: unknown) {
            console.error(err);
            alert('Não foi possível buscar o endereço de forma automática!');
        }
    };

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

                <form onSubmit={onSubmit}>
                    <div className={styles.addressCardForm}>
                        <div className={styles.addressCardFormRow}>
                            <Input type="number" placeholder="CEP" maxLenght={8} onChange={handleChangeCep} />
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <Input id="street" placeholder="Rua" block />
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <div className={styles.rowGrid2}>
                                <Input id="number" type="number" placeholder="Número" maxLenght={10} />

                                <Input id="complement" placeholder="Complemento" optional />
                            </div>
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <div className={styles.rowGrid3}>
                                <Input id="neighborhood" placeholder="Bairro" />

                                <Input id="city" placeholder="Cidade" />

                                <Input id="state-initials" placeholder="UF" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};
