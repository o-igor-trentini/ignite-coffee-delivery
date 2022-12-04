import { FC } from 'react';
import '../styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};
