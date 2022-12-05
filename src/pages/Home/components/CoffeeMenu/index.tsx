import { FC } from 'react';
import styles from './index.module.css';
import { Title } from '../../../../components/ui/Title';
import { CoffeeList } from './components/CoffeeList';

export const CoffeeMenu: FC = () => {
    return (
        <div className={styles.coffeeMenu}>
            <Title size="lg" className={styles.coffeeMenuTitle}>
                Nossos cafés
            </Title>

            <CoffeeList />
        </div>
    );
};
