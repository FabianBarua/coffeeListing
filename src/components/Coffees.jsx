import { CoffeeCard } from './CoffeeCard'

export const Coffees = ({ coffeeList }) => {
  return (
    <ul className='grid mt-6 gap-7 grid-cols-1  lg:grid-cols-2 xl:grid-cols-3'>
      {coffeeList.map((coffee) => { return (<CoffeeCard key={coffee.id} {...coffee} />) })}
    </ul>
  )
}
