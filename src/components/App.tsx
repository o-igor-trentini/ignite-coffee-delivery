import { FC } from 'react';
import '../styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CartContextProvider } from '../context/Cart';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Router />
            </CartContextProvider>
        </BrowserRouter>
    );
};
