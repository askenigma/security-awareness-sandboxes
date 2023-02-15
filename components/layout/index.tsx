import { useState } from "react";
import {
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  ExclamationCircleIcon,
  FlagIcon,
  InboxIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import { MessageViewer } from "../MessageViewer";
import { NarrowSidebar } from "../NarrowSidebar";

import { messages } from "assets/email_data";

const sidebarNavigation = [
  { name: "Inbox", href: "#", icon: InboxIcon, current: true },
  { name: "Sent", href: "#", icon: PaperAirplaneIcon, current: false },
  { name: "Archive", href: "#", icon: ArchiveBoxIconOutline, current: false },
  { name: "Flagged", href: "#", icon: FlagIcon, current: false },
  { name: "Spam", href: "#", icon: ExclamationCircleIcon, current: false },
  { name: "Drafts", href: "#", icon: PencilSquareIcon, current: false },
];

export function Layout() {
  const [selectedMessage, setSelectedMessage] = useState(messages[2]);

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <NarrowSidebar navigationItems={sidebarNavigation} />
          <main className="min-w-0 flex-1 border-t border-gray-200 flex">
            {/* List of messages*/}
            <aside className="xl:order-first xl:block xl:flex-shrink-0">
              <div className="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-100">
                <div className="flex-shrink-0">
                  <div className="flex h-16 flex-col justify-center bg-white px-6">
                    <div className="flex items-baseline space-x-3">
                      <h2 className="text-lg font-medium text-gray-900">
                        Inbox
                      </h2>
                      <p className="text-sm font-medium text-gray-500">
                        {messages.length} messages
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">
                    Sorted by date
                  </div>
                </div>
                <nav
                  aria-label="Message list"
                  className="min-h-0 flex-1 overflow-y-auto"
                >
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 border-b border-gray-200"
                  >
                    {messages.map((message) => (
                      <li
                        key={message.id}
                        className="relative bg-white py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-50"
                        onClick={() => setSelectedMessage(message)}
                      >
                        <div className="flex justify-between space-x-3">
                          <div className="min-w-0 flex-1">
                            <a
                              href={message.href}
                              className="block focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="truncate text-sm font-medium text-gray-900">
                                {message.sender}
                              </p>
                              <p className="truncate text-sm text-gray-500">
                                {message.subject}
                              </p>
                            </a>
                          </div>
                          <time
                            dateTime={message.datetime}
                            className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                          >
                            {message.date}
                          </time>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {message.preview}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
            {/* Message viewer*/}
            <section className="flex h-full min-w-0 flex-1 flex-col overflow-hidden xl:order-last">
              <MessageViewer message={selectedMessage} />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
