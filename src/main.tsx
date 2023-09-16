import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Card_Pedido from "../src/components/Card_Pedido";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Card_Pedido />
    </BrowserRouter>
  </React.StrictMode>,
)
