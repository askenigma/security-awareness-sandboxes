import { Menu } from "@headlessui/react";
import {
  ArchiveBoxIcon as ArchiveBoxIconMini,
  ArrowUturnLeftIcon,
  EllipsisVerticalIcon,
  FolderArrowDownIcon,
  PencilIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import { Toolbar } from './Toolbar'

export function MessageViewer(props: any) {
  const { message } = props;
  return (
    <>
      {/* Top section */}
      <div className="flex-shrink-0 bg-white">
        <Toolbar />
      </div>
      {/* Message container */}
      <div className="bg-white min-h-0 flex-1 overflow-y-auto p-6 flex justify-center" aria-label="Message list">
        {/* Message header */}
        <div className="max-w-[991px] w-100 space-y-8">
          <div className="flex space-x-2 items-start border-b-2 border-gray-400 pb-4">
            {/* Left header */}
            {message.avatar ? <div
              className="h-[34px] w-[32px] rounded-full"
              dangerouslySetInnerHTML={{ __html: message.avatar }}
            /> : <span className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center font-bold">{message.from.split(' ').map((str: String) => str[0]).join('')}</span>}
            
            {/* Right header */}
            <div className="flex justify-between flex-1">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-bold">{message.role? message.role + ' ' : ''}{message.from}</span>
                <span className="text-xs font-medium">Re: {message.subject}</span>
                <span className="text-xs">To:&nbsp;<span className="text-gray-500">{message.receiver.join(', ')}</span></span>
              </div>
              <span className="text-xs text-gray-500">{`${new Date(message.datetime).toDateString()} at ${new Date(message.datetime).toLocaleString().split(', ')[1]}`}</span>
            </div>
          </div>
          {/* Thread section*/}
          {/* <ul role="list" className="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8"> */}
            <div
              className="mt-4 space-y-6 text-sm text-gray-800"
              dangerouslySetInnerHTML={{ __html: message.body }}
            />
          {/* </ul> */}
        </div>
      </div>
    </>
  );
}
