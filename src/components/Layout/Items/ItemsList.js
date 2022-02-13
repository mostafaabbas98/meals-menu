import { useEffect, useState } from 'react'
// import { items } from '../../../data/itemsData'
import Item from './Item'
import { BiLoaderCircle, BiError } from 'react-icons/bi'

import style from './ItemsList.module.css'

const ItemsList = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await fetch(
        'https://meals-cart-7a2e0-default-rtdb.firebaseio.com/meals.json'
      )
      if (!response.ok) {
        throw new Error('Somthing went wrong!')
      }
      const resData = await response.json()
      let loadedMeals = []
      for (const key in resData) {
        loadedMeals.push({
          key,
          title: resData[key].title,
          price: resData[key].price,
          description: resData[key].description,
          filename: resData[key].filename,
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch((error) => {
      setIsLoading(false)
      setHasError(error.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={style.infoMsg}>
        <p>Loading...</p>
        <BiLoaderCircle />
      </section>
    )
  }

  if (hasError) {
    return (
      <section className={style.infoMsg}>
        <p>{hasError}</p>
        <BiError />
      </section>
    )
  }

  const mealsRender = meals.map((item) => (
    <Item
      key={item.filename}
      title={item.title}
      price={item.price}
      desc={item.description}
      imglink={item.filename}
    />
  ))
  return <ul className={style.cartlist}>{mealsRender}</ul>
}

export default ItemsList
