import { FC, Fragment, useContext } from 'react';
import { Card } from '../../../../components/ui/Card';
import styles from './index.module.css';
import { CartContext, Order } from '../../../../context/Cart';
import { Text } from '../../../../components/ui/Text';
import { Counter } from '../../../../components/ui/Counter';
import { Button } from '../../../../components/ui/Button';
import { moneyMask } from '../../../../utils/string';
import { Empty } from './components/Empty';

interface CartCardProps {
    onFinish: () => void;
}

export const CartCard: FC<CartCardProps> = ({ onFinish }) => {
    const { orders, removeOrder, updateOrder } = useContext(CartContext);
    const deliveryPrice = 3.5;
    const itemsTotalPrice = orders.reduce<number>((_, { coffee, amount }) => coffee.price * amount, 0);
    const finalPrice = itemsTotalPrice + deliveryPrice;

    const cartItem = ({ id, coffee, amount }: Order): JSX.Element => {
        const handleRemove = (): void => removeOrder(String(id));

        const handleChange = (newAmount: number): void => {
            setTimeout(() => {
                updateOrder({ id, coffee, amount: newAmount });
            }, 100);
        };

        return (
            <Fragment key={coffee.name}>
                <div className={styles.cartItem}>
                    <div className={styles.cartItemDescriptionContent}>
                        <img src={coffee.imageSrc} alt="" />

                        <div className={styles.cartItemDescription}>
                            <Text size="md" weight="regular">
                                {coffee.name}
                            </Text>

                            <div className={styles.cartItemDescriptionActions}>
                                <Counter
                                    minValue={1}
                                    value={amount}
                                    size="xs"
                                    onIncrease={handleChange}
                                    onDecrease={handleChange}
                                />

                                <Button variant="delete" onClick={handleRemove}>
                                    Remover
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cartItemPrice}>
                        <Text weight="bold" size="md">
                            {moneyMask(coffee.price * amount)}
                        </Text>
                    </div>
                </div>

                <div className={styles.divider} />
            </Fragment>
        );
    };

    return (
        <Card border className="w-100">
            {orders && orders.length ? (
                <>
                    <div className={styles.cartCard}>{orders.map(cartItem)}</div>

                    <div className={styles.cartCardFooter}>
                        <div className={styles.cartCardFooterItem}>
                            <Text size="sm" weight="regular">
                                Total de itens
                            </Text>

                            <Text size="md" weight="regular">
                                {moneyMask(itemsTotalPrice)}
                            </Text>
                        </div>

                        <div className={styles.cartCardFooterItem}>
                            <Text size="sm" weight="regular">
                                Entrega
                            </Text>

                            <Text size="md" weight="regular">
                                {moneyMask(deliveryPrice)}
                            </Text>
                        </div>

                        <div className={styles.cartCardFooterItem}>
                            <Text size="lg" weight="bold">
                                Total
                            </Text>

                            <Text size="lg" weight="bold">
                                {moneyMask(finalPrice)}
                            </Text>
                        </div>
                    </div>

                    <Button variant="primary" block onClick={onFinish}>
                        Confirmar pedido
                    </Button>
                </>
            ) : (
                <Empty label="Por enquanto, nada está no carrinho..." />
            )}
        </Card>
    );
};
