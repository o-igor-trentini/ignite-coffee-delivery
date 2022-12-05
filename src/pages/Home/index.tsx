import { FC } from 'react';
import styles from './index.module.css';
import { Intro } from './components/Intro';

export const Home: FC = () => {
    return (
        <div className={styles.home}>
            <Intro />
        </div>
    );
};
