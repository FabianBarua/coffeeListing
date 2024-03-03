import { useContext, useEffect, useState } from 'react'
import coffeeMock from '../mocks/coffee.json'
import { FiltersContext } from '../context/filterContext'

export const useCoffee = () => {
  const [coffeeList, setCoffeeList] = useState([])
  const { filters, setFilters } = useContext(FiltersContext)
  useEffect(() => {
    setCoffeeList(coffeeMock)
  }, [])

  useEffect(() => {
    // hacerFetch
    const newCoffeeList = coffeeMock.filter(coffee => {
      if (!filters.available) { return true }
      return coffee.available
    })
    setCoffeeList(newCoffeeList)
  }, [filters])

  return ([coffeeList, filters, setFilters])
}
