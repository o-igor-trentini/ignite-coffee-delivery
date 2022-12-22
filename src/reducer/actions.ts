import { CartAction } from './reducer';
import { CartDetails, Order } from '../context/Cart';
import { AddressForm } from '../pages/Checkout/components/AddressFormCard';
import PaymentCard, { PaymentMethod } from '../pages/Checkout/components/PaymentCard';

export enum ActionTypes {
    ADD_ORDER = 'ADD_ORDER',
    REMOVE_ORDER = 'REMOVE_ORDER',
    UPDATE_ORDER = 'UPDATE_ORDER',
    SET_DETAILS = 'SET_DETAILS',
}

export const addOrderAction = (order: Order): CartAction => ({ type: ActionTypes.ADD_ORDER, payload: order });

export const removeOrderAction = (orderId: string): CartAction => ({
    type: ActionTypes.REMOVE_ORDER,
    payload: { orderId },
});

export const updateOrderAction = (order: Order): CartAction => ({
    type: ActionTypes.UPDATE_ORDER,
    payload: order,
});

export const setDetailsAction = (address: AddressForm, paymentMethod: PaymentMethod): CartAction => ({
    type: ActionTypes.SET_DETAILS,
    payload: { address, paymentMethod: paymentMethod },
});
