import { FC } from 'react';
import styles from './index.module.css';
import homeCoffePng from '../../../../assets/pages/home/coffee.png';
import { Description } from './components/Description';

export const Intro: FC = () => {
    return (
        <div className={styles.intro}>
            <Description />

            <img src={homeCoffePng} alt="" />
        </div>
    );
};
