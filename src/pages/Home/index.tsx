import { FC } from 'react';
import styles from './index.module.css';
import { Intro } from './components/Intro';
import { CoffeeMenu } from './components/CoffeeMenu';

export const Home: FC = () => {
    return (
        <div className={styles.home}>
            <Intro />

            <CoffeeMenu />
        </div>
    );
};
