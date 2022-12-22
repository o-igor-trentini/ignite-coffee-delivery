import { FC, useContext } from 'react';
import styles from './index.module.css';
import logoSvg from '../../../assets/logo.svg';
import { Text } from '../../ui/Text';
import { MapPin } from 'phosphor-react';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/Cart';

export const Header: FC = () => {
    const { orders } = useContext(CartContext);
    const navigate = useNavigate();
    const baseUrl = import.meta.env.BASE_URL;

    const handleClickCart = (): void => navigate(`${baseUrl}checkout`);

    return (
        <div className={styles.header}>
            <NavLink to={baseUrl}>
                <img
                    src={logoSvg}
                    alt="Copo de café roxo com um foguete transparente como estampa e uma escrita com o nome da plataforma na direta"
                />
            </NavLink>

            <div className={styles.actions}>
                <div className={styles.location}>
                    <MapPin weight="fill" />

                    <Text size="sm" weight="regular">
                        Concórdia, SC
                    </Text>
                </div>

                <Badge content={orders.length === 0 ? '' : orders.length}>
                    <Button variant="shop-cart-primary" onClick={handleClickCart} />
                </Badge>
            </div>
        </div>
    );
};
