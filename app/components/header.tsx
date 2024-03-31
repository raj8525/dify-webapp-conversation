import type { FC } from 'react'
import React from 'react'
import { useState, useEffect } from 'react'
import main from '@/app/components'
import { userPrefix, client } from '@/app/api/utils/common'
import useConversation from '@/hooks/use-conversation'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
import { API_KEY, APP_ID } from '@/config'
export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}

// function switchAgent(id: string) {
//   const { setCurrConversationId } = useConversation()
//   setCurrConversationId('-1', '57c9916e-7069-407c-8d49-1368cb57bff1')
//   const [appId, setAppId] = useState(APP_ID);
//   const [apiKey, setApiKey] = useState(API_KEY);
//   useEffect(() => {
//     if (!appId || !apiKey) {
//       // main.setAppUnavailable(true);
//       return;
//     }
//     // ... 使用 appId 和 apiKey 初始化应用程序
//   }, [appId, apiKey]);
// }
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <div className="shrink-0 justify-between h-12 px-3 bg-neutral-900 border-gray-700 border-b">
      {isMobile
        ? (
          <div
            className='flex items-center justify-center h-8 w-8 cursor-pointer'
            onClick={() => onShowSideBar?.()}
          >
            <Bars3Icon className="h-4 w-4 text-gray-500" />
          </div>
        )
        : <div></div>}

      <div className='absolute top-2 left-8 space-x-2'>
        <AppIcon size="small" />
        {/* <div className=" text-sm text-gray-400 font-bold">{title}</div> */}
      </div>
      <div className='text-sky-400 absolute top-3 left-24 ' >
        <a href="http://192.168.2.155:3000/">
          脑科学专家
        </a>
      </div>
      <div className='text-sky-400 absolute top-3 left-48 ' >
        <a href="http://192.168.2.155:3000/">
          行为学专家
        </a>
      </div>

      {isMobile
        ? (
          <div className='flex items-center justify-center h-8 w-8 cursor-pointer'
            onClick={() => onCreateNewChat?.()}
          >
            <PencilSquareIcon className="h-4 w-4 text-gray-500" />
          </div>)
        : <div></div>}
    </div>
  )
}

export default React.memo(Header)
