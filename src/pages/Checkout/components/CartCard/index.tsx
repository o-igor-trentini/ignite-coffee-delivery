import { FC, Fragment, useContext } from 'react';
import { Card } from '../../../../components/ui/Card';
import styles from './index.module.css';
import { CartContext, Order } from '../../../../context/Cart';
import { Text } from '../../../../components/ui/Text';
import { Counter } from '../../../../components/ui/Counter';
import { Button } from '../../../../components/ui/Button';
import { moneyMask } from '../../../../utils/string';
import { Empty } from './components/Empty';

export const CartCard: FC = () => {
    const { orders, removeOrder } = useContext(CartContext);
    const itemsTotal = ((): number => {
        let total = 0;

        orders.forEach((item) => {
            total += item.coffee.price * item.amount;
        });

        return total;
    })();

    const cartItem = ({ id, coffee, amount }: Order): JSX.Element => {
        const handleRemove = (): void => removeOrder(String(id));

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
                                <Counter minValue={1} value={amount} size="xs" />

                                <Button variant="delete" onClick={handleRemove}>
                                    Remover
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cartItemPrice}>
                        <Text weight="bold" size="md">
                            R$ {moneyMask(String(coffee.price * amount))}
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
                                R$ 0
                            </Text>
                        </div>

                        <div className={styles.cartCardFooterItem}>
                            <Text size="sm" weight="regular">
                                Entrega
                            </Text>

                            <Text size="md" weight="regular">
                                R$ 0
                            </Text>
                        </div>

                        <div className={styles.cartCardFooterItem}>
                            <Text size="lg" weight="bold">
                                Total
                            </Text>

                            <Text size="lg" weight="bold">
                                R$ {moneyMask('' + itemsTotal)}
                            </Text>
                        </div>
                    </div>

                    <Button variant="primary" block>
                        Confirmar pedido
                    </Button>
                </>
            ) : (
                <Empty label="Por enquanto, nada está no carrinho..." />
            )}
        </Card>
    );
};
