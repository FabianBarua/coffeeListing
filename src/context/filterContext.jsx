import { createContext, useState } from 'react'
import { INITIAL_FILTERS } from '../constants'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
