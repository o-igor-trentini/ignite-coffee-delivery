import { FC } from 'react';
import styles from './index.module.css';
import { PaymentCard } from './components/PaymentCard';
import { Title } from '../../components/ui/Title';
import { CartCard } from './components/CartCard';
import { AddressForm, AddressFormCard } from './components/AddressFormCard';

export const Checkout: FC = () => {
    // const navigate = useNavigate();
    // const baseUrl = import.meta.env.BASE_URL;
    let addressFormValues: AddressForm = {
        zipCode: '',
        street: '',
        number: 0,
        complement: '',
        neighborhood: '',
        city: '',
        uf: '',
    };

    const handleSubmitAddressForm = (values: AddressForm) => {
        console.log('### address', values);

        addressFormValues = values;
    };

    const handleSubmitPaymentForm = () => console.log('### PaymentForm is submited');

    const handleFinish = (): void => {
        // navigate(baseUrl + 'success');
    };

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

                <CartCard onFinish={handleFinish} />
            </div>
        </div>
    );
};
