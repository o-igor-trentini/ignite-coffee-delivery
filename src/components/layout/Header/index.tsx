import { FC } from 'react';
import styles from './index.module.css';
import logoSvg from '../../../assets/logo.svg';
import { Text } from '../../ui/Text';
import { MapPin } from 'phosphor-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <img
                src={logoSvg}
                alt="Copo de café roxo com um foguete transparente como estampa e uma escrita com o nome da plataforma na direta"
            />

            <div className={styles.actions}>
                <div className={styles.location}>
                    <MapPin weight="fill" />

                    <Text size="sm" weight="regular">
                        Concórdia, SC
                    </Text>
                </div>

                <Badge content={1}>
                    <Button variant="shop-cart-primary" />
                </Badge>
            </div>
        </div>
    );
};
