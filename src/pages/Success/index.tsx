import { FC, useContext } from 'react';
import { Title } from '../../components/ui/Title';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import styles from './index.module.css';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { CartContext } from '../../context/Cart';
import { Navigate } from 'react-router-dom';
import deliveryPng from '../../assets/pages/success/delivery.png';

export const Success: FC = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const { details } = useContext(CartContext);
    const { address, payment } = details;

    if (!address || !payment) return <Navigate to={baseUrl + 'checkout'} />;

    return (
        <div className={styles.successContainer}>
            <div className={styles.successDescription}>
                <Title size="lg" className={styles.successDescriptionTitle}>
                    Uhu! Pedido confirmado
                </Title>

                <Text size="lg" weight="regular">
                    Agora é só aguardar que logo o café chegará até você
                </Text>
            </div>

            <div className={styles.successContent}>
                <Card border className={styles.successCard}>
                    <div className={styles.successCardItem}>
                        <MapPin
                            weight="fill"
                            className={`${styles.successCardItemIcon} ${styles.successCardItemIconMap}`}
                        />

                        <Text size="md" weight="regular" className={styles.successCardItemDescription}>
                            Entrega em <strong>{`${address.street}, ${address.number}`}</strong>
                            <br />
                            {`${address.neighborhood} - ${address.city}, ${address.stateInitials}`}
                        </Text>
                    </div>

                    <div className={styles.successCardItem}>
                        <Timer
                            weight="fill"
                            className={`${styles.successCardItemIcon} ${styles.successCardItemIconTimer}`}
                        />

                        <Text size="md" weight="regular" className={styles.successCardItemDescription}>
                            Previsão de entrega
                            <br />
                            <strong>20 min - 30 min</strong>
                        </Text>
                    </div>

                    <div className={styles.successCardItem}>
                        <CurrencyDollar
                            className={`${styles.successCardItemIcon} ${styles.successCardItemIconDollar}`}
                        />

                        <Text size="md" weight="regular" className={styles.successCardItemDescription}>
                            Pagamento da entrega
                            <br />
                            <strong>{payment}</strong>
                        </Text>
                    </div>
                </Card>

                <img src={deliveryPng} alt="" />
            </div>
        </div>
    );
};
