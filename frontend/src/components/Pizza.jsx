import { useEffect, useState } from 'react'
import { formateaNumero } from '../utils/utiles.js'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  const getPizza = async (idpizza) => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${idpizza}`)
    const data = await res.json()

    console.log('mostramos data', data)

    return setPizza(data)
  }

  useEffect(() => {
    const idpizza = 'p001'
    getPizza(idpizza)
  }, [])

  return (
    <div className='card shadow-lg border-1 border-muted' style={{ width: '22rem', borderRadius: '10px' }}>
      <img src={pizza?.img} className='card-img-top' alt={pizza?.name} style={{ borderRadius: '10px 10px 0 0', height: '200px', objectFit: 'cover' }} />

      <div className='card-body text-center m-0 p-0' style={{ width: '100%' }}>
        <h5 className='card-title fw-bold m-3 text-start'>{`Pizza ${pizza?.name}`}</h5>
        <hr className='w-100 mx-auto' />

        <p className='text-start text-muted m-3 fw-semibold'>Ingredientes:</p>

        <ul className='text-start text-muted m-3 fw-semibold'>
          {pizza?.ingredients.map((ingrediente) => <li key={ingrediente}> {ingrediente} </li>)}
        </ul>

        <hr className='w-100 mx-auto' />
        <h5 className='fw-bold text-dark'>Precio: ${formateaNumero(pizza?.price)}</h5>

        <div className='d-flex justify-content-between mt-3 m-3'>
          <button className='btn btn-outline-dark btn-sm'>Ver Más 👀</button>
          <button className='btn btn-dark btn-sm'>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default Pizza
