import { useState, useEffect } from "react";
import {
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  ExclamationCircleIcon,
  FlagIcon,
  InboxIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import { MessageViewer } from "../MessageViewer";

import { messages } from "@/public/assets/email_data";

const sidebarNavigation = [
  { name: "Inbox", href: "#", icon: InboxIcon, current: true },
  { name: "Sent", href: "#", icon: PaperAirplaneIcon, current: false },
  { name: "Archive", href: "#", icon: ArchiveBoxIconOutline, current: false },
  { name: "Flagged", href: "#", icon: FlagIcon, current: false },
  { name: "Spam", href: "#", icon: ExclamationCircleIcon, current: false },
  { name: "Drafts", href: "#", icon: PencilSquareIcon, current: false },
];

interface LayoutProps {
  showMessageList: boolean;
  defaultMessageId?: number;
}

export function Layout(props: LayoutProps) {
  const { showMessageList, defaultMessageId } = props;
  const [mails, setMails] = useState(messages)
  const [selectedMessage, setSelectedMessage] = useState(
    {...messages[defaultMessageId || 0], status: "Open"}
  );

  useEffect(() => {
    setMails(prev => prev.map(m => { return m.id === selectedMessage.id ? {...selectedMessage}: {...m}}))
  }, [selectedMessage])

  // List of messages
  const renderMessageList = () => {
    return (
      <aside className="xl:order-first xl:block xl:flex-shrink-0">
        <div className="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-250">
          <div className="flex-shrink-0">
            <div className="flex h-8 flex-col justify-center m-3">
              <h2 className="text-2xl leading-4 font-bold text-gray-900">Inboxes</h2>
            </div>
          </div>
          <nav
            aria-label="Message list"
            className="min-h-0 flex-1 overflow-y-auto"
          >
            <ul
              role="list"
              className="p-3 space-y-2"
            >
              {mails.map(message => (
                <li
                  key={message.id}
                  className={`relative pt-5 px-6 space-y-2 ${selectedMessage.id===message.id ? "bg-purple-650" : "transparent"} hover:border-gray-50 rounded-md`}
                  onClick={() => setSelectedMessage({...message, status: 'Open'})}
                >
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a
                        href={message.href}
                        className="block focus:outline-none"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        <div className={`flex items-center space-x-2 mb-2 ${message.status!=="Open" && "-ml-2"}`}>
                          {message.status!=="Open" && <span className="w-2 h-2 rounded-full bg-purple-650 -ml-2"></span>}
                          <p className={`truncate text-sm font-bold ${selectedMessage.id === message.id ? "text-white":"text-gray-900"}`}>
                            {message.isExternal ? "[EXTERNAL]":""}&nbsp;{message.from}
                          </p>
                        </div>
                        <p className={`truncate text-xs ${selectedMessage.id === message.id ? "text-white":"text-gray-900"}`}>
                          {message.subject}
                        </p>
                      </a>
                    </div>
                    <time
                      dateTime={message.datetime}
                      className={`flex-shrink-0 whitespace-nowrap text-xs ${selectedMessage.id === message.id ? "text-white":"text-gray-500"}`}
                    >
                      {new Date(message.datetime).toLocaleString().split(', ')[1]}
                    </time>
                  </div>
                  <div className={`mt-1 pb-5 ${selectedMessage.id!==message.id && "border-b border-gray-300"}`}>
                    <p className={`text-xs line-clamp-2 ${selectedMessage.id === message.id ? "text-white":"text-gray-600"}`}>
                      {message.preview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    );
  };

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <main className="min-w-0 flex-1 border-t border-gray-200 flex">
            {showMessageList ? renderMessageList() : null}
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
