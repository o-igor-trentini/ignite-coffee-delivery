import { FC } from 'react';
import { Title } from '../../components/ui/Title';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import styles from './index.module.css';

export const Success: FC = () => {
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

            <Card border className={styles.successCard}>
                aalksndlkasjdklasjdlkjsa
            </Card>
        </div>
    );
};
