import Header from './Header'
import CardPizza from './CardPizza'
// import { pizzas } from '../utils/pizzas'

import { useEffect, useState } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    // console.log('mostramos data', data)

    return setPizzas(data)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <>
      <Header />

      <div className='container p-3'>
        <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
          {pizzas.map(pizza => (
            <CardPizza
              key={pizza.id}
              img={pizza.img}
              ingredients={pizza.ingredients}
              name={pizza.name}
              price={pizza.price}
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default Home
