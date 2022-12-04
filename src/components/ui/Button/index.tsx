import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import { ShoppingCart, ShoppingCartSimple, Trash } from 'phosphor-react';

const ButtonVariants = {
    primary: 'primary',
    'shop-cart-primary': 'shop-cart-primary',
    'shop-cart-secondary': 'shop-cart-secondary',
    delete: 'delete',
};

type ButtonVariant = keyof typeof ButtonVariants;
type ButtonSize = 'xs' | 'sm' | 'default';

interface ButtonProps {
    children?: ReactNode;
    type?: 'submit' | 'button';
    variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ children, type = 'button', variant = 'primary' }) => {
    const sizeClassName: Record<ButtonSize, string> = {
        xs: styles.buttonXsSize,
        sm: styles.buttonSmSize,
        default: styles.buttonDefaultSize,
    };

    const variantClassName: Record<ButtonVariant, string> = {
        primary: `${styles.buttonPrimary} ${sizeClassName['default']}`,
        'shop-cart-primary': `${styles.buttonShopCartLightPrimary} ${sizeClassName['sm']}`,
        'shop-cart-secondary': `${styles.buttonShopCartSecondary} ${sizeClassName['sm']}`,
        delete: `${styles.buttonDelete} ${sizeClassName['xs']}`,
    };

    const icon: Record<ButtonVariant, JSX.Element> = {
        primary: <></>,
        'shop-cart-primary': <ShoppingCart weight="fill" size={22} />,
        'shop-cart-secondary': <ShoppingCartSimple weight="fill" size={22} />,
        delete: <Trash size={16} />,
    };

    const iconIsVisible = [
        ButtonVariants['shop-cart-primary'],
        ButtonVariants['shop-cart-secondary'],
        ButtonVariants.delete,
    ].includes(variant);
    const childrenIsVisible = variant !== 'shop-cart-primary' && variant !== 'shop-cart-secondary';

    const className = `${styles.button} ${variantClassName[variant]}`;

    return (
        <button type={type} className={className}>
            {iconIsVisible && <span className={styles.buttonIcon}>{icon[variant]}</span>}

            <span hidden={!childrenIsVisible}>{children}</span>
        </button>
    );
};
