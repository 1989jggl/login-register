import axios from 'axios'
const HOST_IP = 'http://localhost:10008'

const aplicationConnect = axios.create({
  baseURL: `${HOST_IP}/api/v1`
})

aplicationConnect.interceptors.request.use(async (config) => {
  if (!config) {
    config = {}
  }
  if (!config.headers) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'

  return config
})

export default aplicationConnect
