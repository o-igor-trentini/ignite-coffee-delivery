import { FC } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

export const Default: FC = () => {
    return (
        <div className={styles.default}>
            <Header />

            <div className={styles.defaultContent}>
                <Outlet />
            </div>
        </div>
    );
};
