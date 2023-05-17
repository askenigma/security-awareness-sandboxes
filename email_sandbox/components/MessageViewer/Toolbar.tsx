import Image from "next/image"
import evenlopePic from './icons/envelope.png'
import replyPic from './icons/reply.png'
import archivePic from './icons/archive.png'
import trashPic from './icons/trash.png'
import movePic from './icons/move.png'
import searchPic from './icons/search.png'
import { IconBtn } from "./IconBtn"
import { IconInput } from './IconInput'

const iconBtns = [
  {
    image: evenlopePic,
    alt: 'envelope'
  },
  {
    image: replyPic,
    alt: 'reply'
  },
  {
    image: archivePic,
    alt: 'archive'
  },
  {
    image: trashPic,
    alt: 'trash'
  }

]

export function Toolbar(props: any) {
  return <div className="flex justify-between p-3 bg-gray-150">
    {/* Left toolbar */}
    <div className="space-x-4 flex">
      {iconBtns.map(btn => <IconBtn {...btn} key={btn.alt} />)}
      <IconInput className="w-[170px]" placeholder="Move to..." image={movePic} />
    </div>
    {/* Right toolbar */}
    <IconInput className="w-[268px]" placeholder="Search" image={searchPic} />
  </div>
}