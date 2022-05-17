const TEXT_LAYOUT = `Nuwe es la platforma que convierte el desarrollo profesional, la búsquda
de trabajo y la conexiones de personas y empresas en un juego. Haciendo
que puedas centrarte en lo que te gusta, programar, diseñar, crear,
planear...`
interface Props {
  text?: string;
}
export const Layout = ({ text = TEXT_LAYOUT }: Props) => {
  return (
    <div className="hidden md:flex flex-1 bg-[#569B51] justify-center items-center relative overflow-hidden order-2 md:order-1 ">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-cover bg-no-repeat flex-auto min-w-0 bg-home opacity-10" />
      <div className="text-center text-white text-xl font-normal leading-9 sm:max-w-md">{text}</div>
    </div>
  )
}
