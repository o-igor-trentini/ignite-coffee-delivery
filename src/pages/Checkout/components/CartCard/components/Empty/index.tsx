import { FC } from 'react';
import { Text } from '../../../../../../components/ui/Text';
import { ShoppingCart, ShoppingCartSimple } from 'phosphor-react';
import styles from './index.module.css';

interface EmptyProps {
    label?: string;
}

export const Empty: FC<EmptyProps> = ({ label }) => {
    return (
        <div className={styles.empty}>
            <ShoppingCart size={80} />

            {label && (
                <Text size="md" weight="regular">
                    {label}
                </Text>
            )}
        </div>
    );
};
