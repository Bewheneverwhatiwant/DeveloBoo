import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from "./router"
import { RouterProvider } from 'react-router-dom';
import Fonts from './Fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Fonts /><RouterProvider router={router} /></>);