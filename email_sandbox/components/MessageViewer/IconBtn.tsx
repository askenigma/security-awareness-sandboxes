import Image from "next/image"

export function IconBtn(props: any) {
  const {image, alt} = props
  return <span className="w-[45px] h-[28px] flex items-center justify-center bg-purple-100 rounded-md cursor-pointer"><Image src={image} alt={alt} width={16} height={16} /></span>
}