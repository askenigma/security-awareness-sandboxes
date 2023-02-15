import { Menu } from "@headlessui/react";
import {
  ArchiveBoxIcon as ArchiveBoxIconMini,
  ArrowUturnLeftIcon,
  EllipsisVerticalIcon,
  FolderArrowDownIcon,
  PencilIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";

export function MessageViewer(props: any) {
  const { message } = props;
  return (
    <>
      {/* Top section */}
      <div className="flex-shrink-0 border-b border-gray-200 bg-white">
        {/* Toolbar*/}
        <div className="flex h-16 flex-col justify-center">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between py-3">
              {/* Left buttons */}
              <div>
                <div className="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none">
                  <span className="inline-flex sm:shadow-sm">
                    <button
                      type="button"
                      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <ArrowUturnLeftIcon
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Reply</span>
                    </button>
                    <button
                      type="button"
                      className="relative -ml-px hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                    >
                      <PencilIcon
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Note</span>
                    </button>
                    <button
                      type="button"
                      className="relative -ml-px hidden items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                    >
                      <UserPlusIcon
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Assign</span>
                    </button>
                  </span>

                  <span className="hidden space-x-3 lg:flex">
                    <button
                      type="button"
                      className="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                    >
                      <ArchiveBoxIconMini
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Archive</span>
                    </button>
                    <button
                      type="button"
                      className="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                    >
                      <FolderArrowDownIcon
                        className="mr-2.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Move</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Message header */}
      </div>
      {/* Message container */}
      <div className="min-h-0 flex-1 overflow-y-auto" aria-label="Message list">
        {/* Message header */}
        <div className="bg-white pt-5 pb-6 shadow">
          <div className="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
            <div className="sm:w-0 sm:flex-1">
              <h1
                id="message-heading"
                className="text-lg font-medium text-gray-900"
              >
                {message.subject}
              </h1>
              <p className="mt-1 truncate text-sm text-gray-500">
                {message.sender}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
              <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-0.5 text-sm font-medium text-cyan-800">
                {message.status}
              </span>
              <Menu as="div" className="relative ml-3 inline-block text-left">
                <div>
                  <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        {/* Thread section*/}
        <ul role="list" className="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8">
          {message.items.map((item: any) => (
            <li
              key={item.id}
              className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6"
            >
              <div className="sm:flex sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium">
                  <span className="text-gray-900">{item.author}</span>{" "}
                  <span className="text-gray-600">wrote</span>
                </h3>
                <p className="mt-1 whitespace-nowrap text-sm text-gray-600 sm:mt-0 sm:ml-3">
                  <time dateTime={item.datetime}>{item.date}</time>
                </p>
              </div>
              <div
                className="mt-4 space-y-6 text-sm text-gray-800"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
