import { useContext } from 'react'
import { ButtonSwitch } from './ButtonSwitch'
import { FiltersContext } from '../context/filterContext'

export const SwitchCoffees = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  return (
    <ul className='flex justify-center gap-2 mt-1'>
      <ButtonSwitch active={!filters.available} onClick={() => { setFilters({ ...filters, available: false }) }}>All Products</ButtonSwitch>
      <ButtonSwitch active={filters.available} onClick={() => { setFilters({ ...filters, available: true }) }}>Available Now</ButtonSwitch>
    </ul>
  )
}
