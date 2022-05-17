import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { handleRegisterSocial, registerRequest } from '../service/auht'
interface InitialValues {
  nomuser: string;
  corelec: string;
  password: string;
  type: string;
  agree: boolean;
}
const initialValues: InitialValues = {
  nomuser: '',
  corelec: '',
  password: '',
  type: '',
  agree: false
}
interface Props {
  type: string | undefined;
}

export const useRegister = ({ type }: Props) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const enableLoading = () => setLoading(true)
  const disableLoading = () => setLoading(false)

  const registerSchema = Yup.object().shape({
    nomuser: Yup.string()
      .min(3, 'Mínimo 3 letras')
      .max(50, 'Maximo 50 letras')
      .required('Campo requerido'),
    corelec: Yup.string()
      .email('Correo electrónico no válido')
      .required('Campo requerido'),
    type: Yup.string().required('Campo requerido'),
    password: Yup.string()
      .min(8, 'Mínimo 8 letras')
      .required('Campo requerido'),
    agree: Yup.bool().oneOf(
      [true],
      'Debes aceptar los terminos para continuar'
    )
  })
  const formik = useFormik({
    initialValues: { ...initialValues, type },
    validationSchema: registerSchema,
    onSubmit: (values, { setSubmitting }) => {
      enableLoading()
      setTimeout(async () => {
        try {
          const { corelec, password, nomuser, type } = values
          if (type) {
            await registerRequest({ corelec, nomuser, password, type })
            navigate('/login')
          }
        } catch (error) {
          disableLoading()
          setSubmitting(false)
        }
      }, 1000)
    }
  })

  return { formik, handleRegisterSocial, loading }
}
