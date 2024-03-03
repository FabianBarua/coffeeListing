import { Header } from './components/Header'
import { SwitchCoffees } from './components/SwitchCoffees'
import { Coffees } from './components/Coffees'
import { useCoffee } from './hooks/useCoffee'

function App () {
  const [coffeeList] = useCoffee()
  return (
    <>
      <main className=' font-DM px-6 md:px-0  py-16 flex flex-col justify-center items-center bg-coffee-black-primary rounded-xl'>
        <Header />
        <section>
          <SwitchCoffees />
          <Coffees coffeeList={coffeeList} />
        </section>
      </main>
      <footer className=' my-16 max-w-min text-center text-nowrap rounded-lg mx-auto text-white/25 py-1 px-6 bg-white/5'>
        Developed by {' '}
        <a href='https://github.com/FabianBarua' className=' underline font-medium'>@FabianBarua</a>
      </footer>
    </>
  )
}

export default App
