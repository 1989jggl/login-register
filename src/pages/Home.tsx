import { AiOutlineUser } from 'react-icons/ai'
import { BiBuildings } from 'react-icons/bi'
import { HeaderForm } from '../components/HeaderForm'
import { LinkLogin } from '../components/LinkLogin'
import { LinkRegister } from '../components/LinkRegister'

export const Home = () => {
  return (
    <>
      <LinkRegister />
      <div className="flex flex-grow flex-col min-h-full relative">
        <div className="flex flex-1 flex-col justify-center mt-10 md:mt-0 items-center md:items-start">
          <HeaderForm title='¡Únete a la comunidad!' details='Para empezar, dinos que cuenta te gustaría abrir.' />
          <LinkLogin
            details="Cuenta personal para entrar en el mundo dev"
            title="Developers"
            url="/register/developers"
            icon={<AiOutlineUser size={24} className="absolute top-3 left-3.5" />}
          />
          <LinkLogin
            details="Tienes o perteneces a una compañía"
            title="Business"
            url="/register/business"
            icon={<BiBuildings size={24} className="absolute top-3 left-3.5" />}
          />
        </div>
      </div>
    </>
  )
}
