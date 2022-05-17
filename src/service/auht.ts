import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import aplicationConnect from '../application-connect'
import { Login, User } from '../types'

const MySwal = withReactContent(Swal)

export const registerRequest = async (values: User) => {
  try {
    const request = await aplicationConnect.post('/auth/register', values)
    const { status, response, title } = request.data
    if (status) {
      MySwal.fire({
        icon: 'success',
        text: response,
        title
      })
    }
  } catch (error: any) {
    const { response, title } = error.response.data
    throw MySwal.fire({
      icon: 'error',
      text: response || 'Ocurrio un problema, comuniquese con el administrador',
      title
    })
  }
}
export const loginRequest = async (values: Login) => {
  try {
    const request = await aplicationConnect.post('/auth/login', values)
    const { status, response } = request.data
    if (status) {
      localStorage.setItem('user', JSON.stringify(response))
      return response
    }
  } catch (error: any) {
    const { response, title } = error.response.data
    throw MySwal.fire({
      icon: 'error',
      text: response || 'Ocurrio un problema, comuniquese con el administrador',
      title
    })
  }
}

export const handleRegisterSocial = () => {
  let timerInterval = null as any
  MySwal.fire({
    title: 'Se esta procesando tu solicitud',
    icon: 'success',
    html: 'Cargando en <b></b> milisegundos.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer()!.querySelector('b') as any
      timerInterval = setInterval(() => {
        b!.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  })
}
