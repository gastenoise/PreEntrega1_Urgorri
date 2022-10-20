import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'

function App() {
    return (
    <>
    <NavBar/>
    <Header nombre="Iván" apellido="Pérez" dinero="2500"/>
    <ItemListContainer greeting="Que tengas una buena compra en nuestra plataforma!" />
    </>
    )         
}

export default App