//atajo rfce

import React from 'react'

function Header() {
  return (
    <>
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
      <span className="text-orange-600">CRUD</span> 
      {""} de Contactos
    </h1>
    <p className="text-center md:w-2/3 mx-auto mt-5">Realizado con React: uso de 
      useState, useEffect, Props. Compilación con ViteJs, Deployment en Netlify </p>
    </>
  )
}

export default Header