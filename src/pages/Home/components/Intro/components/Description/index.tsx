import { FC } from 'react';
import styles from './index.module.css';
import { Text } from '../../../../../../components/ui/Text';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { Title } from '../../../../../../components/ui/Title';

export const Description: FC = () => {
    const descriptionItens: { icon: JSX.Element; backgroundColor: string; text: string }[] = [
        {
            icon: <ShoppingCart weight="fill" />,
            backgroundColor: 'var(--yellow-dark)',
            text: 'Compra simples e segura',
        },
        {
            icon: <Package weight="fill" />,
            backgroundColor: 'var(--base-text)',
            text: 'Embalagem mantém o café intacto',
        },
        { icon: <Timer weight="fill" />, backgroundColor: 'var(--yellow)', text: 'Entrega rápida e rastreada' },
        { icon: <Coffee weight="fill" />, backgroundColor: 'var(--purple)', text: 'O café chega fresquinho até você' },
    ];

    return (
        <div className={styles.description}>
            <div className={styles.descriptionDisclaimer}>
                <Title size="xl" className={styles.descriptionTitle}>
                    Encontre o café perfeito para qualquer hora do dia
                </Title>

                <Text size="lg" weight="regular" className={styles.descriptionSubtitle}>
                    Com o Coffee Delivery você recebe o seu café onde estiver, a qualquer hora
                </Text>
            </div>

            <div className={styles.descriptionItens}>
                {descriptionItens.map((item) => (
                    <div key={item.text} className={styles.descriptionItem}>
                        <span className={styles.descriptionItemIcon} style={{ backgroundColor: item.backgroundColor }}>
                            {item.icon}
                        </span>

                        <Text size="md" weight="regular">
                            {item.text}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
