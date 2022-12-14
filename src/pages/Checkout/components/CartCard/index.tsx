import { FC } from 'react';
import { Card } from '../../../../components/ui/Card';
import styles from './index.module.css';

export const CartCard: FC = () => {
    return (
        <Card border className="w-100">
            <div className={styles.cartCard}></div>
        </Card>
    );
};
