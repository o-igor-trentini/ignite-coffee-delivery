import { Order } from '../context/Cart';
import { ActionTypes } from './actions';
import { v4 as uuidv4 } from 'uuid';

export interface CartState {
    orders: Order[];
}

export interface CartAction {
    type: ActionTypes;
    payload?: unknown;
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    /*eslint-disable*/
    switch (action.type) {
        case ActionTypes.ADD_ORDER: {
            let orders = state.orders.slice();
            const payload = action.payload as Order;
            const orderIndex = state.orders.findIndex((item) => item.coffee.name === payload.coffee.name);

            if (orderIndex < 0)
                orders.push({
                    id: uuidv4(),
                    coffee: payload.coffee,
                    amount: payload.amount,
                });
            else orders[orderIndex] = { ...orders[orderIndex], amount: orders[orderIndex].amount + payload.amount };

            return { ...state, orders };
        }

        case ActionTypes.REMOVE_ORDER: {
            const { orderId } = action.payload as { orderId: string };
            const orders = state.orders.slice();

            return { ...state, orders: orders.filter((item) => item.id !== orderId) };
        }

        case ActionTypes.UPDATE_ORDER: {
            const order = action.payload as Order;
            const orders = state.orders.slice();

            const orderIndex = orders.findIndex((item) => item.id === order.id);

            if (orderIndex < 0) return state;

            orders[orderIndex] = order;

            return { ...state, orders };
        }

        default:
            return state;
    }
    /*eslint-enable*/
};
