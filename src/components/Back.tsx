import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
export const Back = () => {
  return (
    <div className="flex justify-start">
    <div className="text-center">
      <Link
        className="font-normal text-lg leading-7 flex items-center"
        to="/"
      >
        <IoIosArrowBack size={24} className='mr-2' />
        Volver
      </Link>
    </div>
  </div>
  )
}
