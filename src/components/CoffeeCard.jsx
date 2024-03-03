import starFill from '../../public/Star_fill.svg'
import star from '../../public/Star.svg'

const Rating = ({ votes, rating }) => {
  return (
    <>
      <img src={votes ? starFill : star} alt='Star' className=' h-min' />
      <span className=''>
        {rating}
        <span className=' ml-1  text-coffee-gray'>
          ({votes} votes)
        </span>
      </span>
    </>
  )
}

export const CoffeeCard = ({ id, name, image, popular, price, votes, available, rating }) => {
  return (
    <>

      <li className=' max-w-72 w-full'>
        <div className='relative bg-coffee-gray rounded-2xl  overflow-hidden w-full h-48'>
          <img src={image} alt={name} className=' w-full h-full object-cover' />
          {popular && <span className='  absolute px-4 rounded-full top-2 left-2 bg-coffee-yellow text-coffee-black-primary '>Popular</span>}
        </div>
        <div className='flex mt-3  justify-between'>
          <p className=' text-lg'>{name}</p>
          <span className=' bg-coffee-cyan  text-coffee-black-primary  px-3 py-1 rounded-md font-bold'>{price}</span>
        </div>
        <div className='flex mt-2 text-md justify-between items-center'>
          <div className='flex gap-2 tracking-[-.01rem] '>
            <Rating votes={votes} rating={rating} />
          </div>
          {!available && <p className=' text-coffee-red '>Sold Out</p>}
        </div>
      </li>

    </>
  )
}
