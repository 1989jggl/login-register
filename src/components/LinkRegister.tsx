import { Link } from 'react-router-dom'

export const LinkRegister = () => {
  return (
    <div className="flex justify-end">
    <div className="text-center">
      <span className="font-normal text-lg leading-7">
        Ya tienes cuenta ?
      </span>{' '}
      <Link
        className="text-[#569B51] font-medium text-lg leading-7"
        to="/login"
      >
        Inicia sesión
      </Link>
    </div>
  </div>
  )
}
