import { FC } from 'react';
import styles from './index.module.css';
import { AddressFormCard } from './components/AddressFormCard';
import { PaymentCard } from './components/PaymentCard';
import { Title } from '../../components/ui/Title';
import { CartCard } from './components/CartCard';

export const Checkout: FC = () => {
    const handleSubmitAddressForm = () => console.log('### AddressForm is submited');

    const handleSubmitPaymentForm = () => console.log('### PaymentForm is submited');

    return (
        <div className={styles.checkout}>
            <div className={styles.checkoutForms}>
                <Title size="xs">Complete seu pedido</Title>

                <div className={styles.checkoutFormsCards}>
                    <AddressFormCard onSubmit={handleSubmitAddressForm} />

                    <PaymentCard onSubmit={handleSubmitPaymentForm} />
                </div>
            </div>

            <div className={styles.checkoutCart}>
                <Title size="xs">Cafés selecionados</Title>

                <CartCard />
            </div>
        </div>
    );
};
