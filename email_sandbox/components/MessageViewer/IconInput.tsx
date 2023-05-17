import Image from "next/image"

export function IconInput(props: any) {
  const { image, placeholder, className } = props
  return <div className={`p-1 flex items-center border rounded-md ${className}`}>
    <Image src={image} alt="symbol" width={16} height={16} />
    <input type="text" className={`border-0 h-[20px] p-1 focus:ring-0 text-xs overflow-clip text-gray-500 transparent flex-1`} placeholder={placeholder} />
  </div>
}