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
        <Card className={styles.checkoutCard}>
            <div className={styles.checkoutAddressCard}>
                <div className={styles.checkoutAddressCardTitle}>
                    <MapPinLine />

                    <div className={styles.checkoutAddressCardDescription}>
                        <Text size="md" weight="regular">
                            Endereço de Entrega
                        </Text>

                        <Text size="sm" weight="regular">
                            Informe o endereço onde deseja receber seu pedido
                        </Text>
                    </div>
                </div>

                <form onSubmit={onSubmit}>
                    <div className={styles.checkoutAddressCardForm}>
                        <div className={styles.checkoutAddressCardFormRow}>
                            <Input placeholder="CEP" maxLenght={8} />
                        </div>

                        <div className={styles.checkoutAddressCardFormRow}>
                            <Input placeholder="Rua" cover />
                        </div>

                        <div className={styles.checkoutAddressCardFormRow}>
                            <div className={styles.rowGrid2}>
                                <Input placeholder="Número" />

                                <Input placeholder="Complemento" optional />
                            </div>
                        </div>

                        <div className={styles.checkoutAddressCardFormRow}>
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
