interface Props{
    title:string
    details:string
}
export const HeaderForm = ({ title, details }:Props) => {
  return (
    <div className="mb-10">
    <h3 className="font-bold text-3xl leading-9 text-black mb-2">
     {title}
    </h3>
    <p className="text-lg font-normal leading-7 ">
     {details}
    </p>
  </div>
  )
}
