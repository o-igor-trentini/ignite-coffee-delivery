import { FC, useContext, useRef } from 'react';
import styles from './index.module.css';
import PaymentCard, { PaymentCardFormRef } from './components/PaymentCard';
import { Title } from '../../components/ui/Title';
import { CartCard } from './components/CartCard';
import AddressFormCard, { AddressFormCardRef } from './components/AddressFormCard';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/Cart';

export const Checkout: FC = () => {
    const { setDetails } = useContext(CartContext);
    const navigate = useNavigate();
    const baseUrl = import.meta.env.BASE_URL;
    const addressFormRef = useRef<AddressFormCardRef>(null);
    const paymentFormRef = useRef<PaymentCardFormRef>(null);

    const handleFinish = (): void => {
        const addressFormValues = addressFormRef.current?.getValues();
        const paymentFormValues = paymentFormRef.current?.getValues();

        if (!addressFormValues || !paymentFormValues) return;

        setDetails(addressFormValues, paymentFormValues.method);

        navigate(baseUrl + 'success');
    };

    return (
        <div className={styles.checkout}>
            <div className={styles.checkoutForms}>
                <Title size="xs">Complete seu pedido</Title>

                <div className={styles.checkoutFormsCards}>
                    <AddressFormCard ref={addressFormRef} />

                    <PaymentCard ref={paymentFormRef} />
                </div>
            </div>

            <div className={styles.checkoutCart}>
                <Title size="xs">Cafés selecionados</Title>

                <CartCard onFinish={handleFinish} />
            </div>
        </div>
    );
};
