import { useField } from 'formik'
import { useState } from 'react'

export const InputForm = ({ ...props }: any) => {
  const [field, meta] = useField(props)
  const [show, setShow] = useState(false)
  return (
    <div className="mb-7 relative text-left">
      <label htmlFor={field.name} className="ml-1">
        {props.title}*
      </label>
      <input
        {...field}
        className="block w-full text-base font-normal leading-6 bg-clip-padding rounded-xl border-2 py-4 px-8 bg-transparent-custom h-auto focus:outline-none focus:border-[#569B51] mt-2"
        {...props}
        id={field.name}
        type={show ? 'text' : props.type}
      />
      {props.type === 'password' && (
        <span onClick={() => setShow(prev => !prev)} className="absolute top-12 right-4 cursor-pointer">
          Mostrar
        </span>
      )}
      {meta.touched && Boolean(meta.error)
        ? (
        <div className="mt-1 text-center">
          <div className="text-danger-custom text-sm font-medium">
            {meta.error}
          </div>
        </div>
          )
        : null}
    </div>
  )
}
