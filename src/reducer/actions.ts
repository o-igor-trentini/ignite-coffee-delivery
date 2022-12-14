import { CartAction } from './reducer';
import { Order } from '../context/Cart';

export enum ActionTypes {
    ADD_ORDER = 'ADD_ORDER',
    REMOVE_ORDER = 'REMOVE_ORDER',
}

export const addOrderAction = (order: Order): CartAction => ({ type: ActionTypes.ADD_ORDER, payload: order });

export const removeOrderAction = (orderId: string): CartAction => ({
    type: ActionTypes.REMOVE_ORDER,
    payload: { orderId },
});
