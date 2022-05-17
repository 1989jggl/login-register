import { FormikProvider } from 'formik'
import { useParams } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { Back } from '../components/Back'
import { HeaderForm } from '../components/HeaderForm'
import { InputForm } from '../components/InputForm'
import { useRegister } from '../hooks/useRegister'
import { InputCheckbox } from '../components/InputCheckbox'

export const Register = () => {
  const { type } = useParams<{ type: string }>()
  const { formik, loading, handleRegisterSocial } = useRegister({ type })
  return (
    <FormikProvider value={formik}>
      <Back />
      <div className="flex flex-grow flex-col min-h-full relative justify-center items-center mt-10 md:mt-0">
        <div className="flex flex-1 flex-col justify-center text-center w-full sm:max-w-md">
          <HeaderForm
            title="Registra tu cuenta individual"
            details="Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"
          />
          <div className="border-b-2 opacity-20 mb-6" />
          <form onSubmit={formik.handleSubmit}>
            <InputForm
              title="Nombre completo"
              placeholder="Introduce tu nombre completo"
              {...formik.getFieldProps('nomuser')}
              disabled={loading}
              type="text"
            />{' '}
            <InputForm
              title="Correo electrónico"
              placeholder="Introduce tu correo electrónico"
              {...formik.getFieldProps('corelec')}
              disabled={loading}
              type="text"
            />{' '}
            <InputForm
              title="Contraseña"
              placeholder="Introduce tu contraseña"
              {...formik.getFieldProps('password')}
              disabled={loading}
              type="password"
            />
            <InputForm
              title="Tipo de cuenta"
              placeholder="Tipo de cuenta"
              {...formik.getFieldProps('type')}
              disabled
              value={type}
            />
            <InputCheckbox formik={formik} />
            <button
              className="bg-[#569B51] h-auto w-full py-4 rounded-xl hover:-translate-y-1 hover:scale-110 hover:bg-[#569B51] duration-300"
              type="submit"
              disabled={loading || formik.isSubmitting}
            >
              <span className="text-white font-medium text-base leading-5">
                Registrar cuenta
              </span>
            </button>
            <div className="flex mt-6 items-center justify-center mb-6">
              <div className="flex-1 border-b-2 opacity-20" />
              <div className="border-2 rounded-full w-4 h-4 mr-4 ml-4" />
              <div className="flex-1 border-b-2 opacity-20" />
            </div>
            <div className="relative">
              <FcGoogle className="absolute left-8 top-4" size={24} />
            </div>
            <button
              className="h-auto w-full py-4 rounded-xl shadow-xl border-2"
              type="button"
              onClick={() => handleRegisterSocial()}
            >
              <span className="font-medium text-base leading-5">
                Regístrate con Google
              </span>
            </button>
          </form>
        </div>
      </div>
    </FormikProvider>
  )
}
