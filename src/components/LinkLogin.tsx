import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface Props {
  title: string;
  details: string;
  url: string;
  icon: any;
}
export const LinkLogin = ({ details, title, url, icon }: Props) => {
  const [block, setBlock] = useState(false)
  return (
    <Link
      to={url}
      className={`flex items-center 
    cursor-pointer relative
    shadow-xl h-32 w-full sm:w-2/3 p-4 mb-10 rounded-xl border-2 
    ${block ? 'bg-[#F5F9FF] border-[#569B51]' : undefined}`}
      onMouseOver={() => setBlock(true)}
      onMouseOut={() => setBlock(false)}
    >
      <div className="">
        <div
          className={`${
            block ? 'bg-[#569B51] text-white' : 'text-[#569B51]'
          } inline-block flex-shrink-0 relative rounded-lg w-14 h-14 border-2 border-[#569B51]`}
        >
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-base leading-5 text-black">{title}</h4>
        <p className="font-normal text-sm leading-4 text-[#8692A6]">
          {details}
        </p>
      </div>
      <div className="absolute top-12 right-10">
        <AiOutlineArrowRight
          size={24}
          className={`${block ? 'text-[#569B51] block font-bold' : 'hidden'}`}
        />
      </div>
    </Link>
  )
}
