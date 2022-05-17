import App from './app'

class Server {
  constructor () {
    this.main()
  }

  /**
     * startSever
     * funcion que inicializa el servidor
     */
  public async main () {
    const app = new App()
    await app.start()
  }
}
new Server()