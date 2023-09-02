import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer';

function App() {

  const greeting = "Bienvenidos e mi e-Comerce de Sushi"

  return (
    <>
    <NavBar />
    <ItemListContainer greeting={greeting} />

    </>
  )
}


export default App;
