import { FC } from 'react';
import styles from './index.module.css';
import { AddressFormCard } from './components/AddressFormCard';

export const Checkout: FC = () => {
    const handleSubmitAddressForm = () => console.log('### AddressForm is submited');

    return (
        <div className={styles.checkout}>
            <AddressFormCard onSubmit={handleSubmitAddressForm} />
        </div>
    );
};
