import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../service/auht'

interface InitialValues {
  corelec: string;
  password: string;
}
const initialValues: InitialValues = {
  corelec: '',
  password: ''
}
export const useLogin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const enableLoading = () => setLoading(true)
  const disableLoading = () => setLoading(false)
  const loginSchema = Yup.object().shape({
    corelec: Yup.string()
      .email('Correo electrónico no válido')
      .required('Campo requerido'),
    password: Yup.string()
      .min(8, 'Mínimo 8 letras')
      .required('Campo requerido')
  })
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      enableLoading()
      setTimeout(async () => {
        try {
          const { corelec, password } = values
          await loginRequest({ corelec, password })
          navigate('/dashboard')
        } catch (error) {
          disableLoading()
          setSubmitting(false)
        }
      }, 1000)
    }
  })
  return { loading, formik }
}
