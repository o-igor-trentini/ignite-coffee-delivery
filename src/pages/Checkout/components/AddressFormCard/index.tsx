import { FC } from 'react';
import { Card } from '../../../../components/ui/Card';
import styles from './index.module.css';
import { MapPinLine } from 'phosphor-react';
import { Text } from '../../../../components/ui/Text';
import { Input } from '../../../../components/ui/Input';

interface AddressFormCardProps {
    onSubmit: () => void;
}

export const AddressFormCard: FC<AddressFormCardProps> = ({ onSubmit }) => {
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
                            <Input placeholder="CEP" maxLenght={8} />
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <Input placeholder="Rua" block />
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <div className={styles.rowGrid2}>
                                <Input placeholder="Número" />

                                <Input placeholder="Complemento" optional />
                            </div>
                        </div>

                        <div className={styles.addressCardFormRow}>
                            <div className={styles.rowGrid3}>
                                <Input placeholder="Bairro" />

                                <Input placeholder="Cidade" />

                                <Input placeholder="UF" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};
