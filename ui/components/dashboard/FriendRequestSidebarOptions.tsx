'use client'

import { pusherClient } from '@/lib/pusher'
import { toPusherKey } from '@/lib/utils'
import { User } from 'lucide-react'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { NotificationContainer } from './styles'

interface FriendRequestSidebarOptionsProps {
  sessionId: string
  initialUnseenRequestCount: number
}

const FriendRequestSidebarOptions: FC<FriendRequestSidebarOptionsProps> = ({
  sessionId,
  initialUnseenRequestCount,
}) => {
  const [unseenRequestCount, setUnseenRequestCount] = useState<number>(
    initialUnseenRequestCount
  )

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`user:${sessionId}:incoming_friend_requests`)
    )
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:friends`))

    const friendRequestHandler = () => {
      setUnseenRequestCount((prev) => prev + 1)
    }

    const addedFriendHandler = () => {
      setUnseenRequestCount((prev) => prev - 1)
    }

    pusherClient.bind('incoming_friend_requests', friendRequestHandler)
    pusherClient.bind('new_friend', addedFriendHandler)

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${sessionId}:incoming_friend_requests`)
      )
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:friends`))

      pusherClient.unbind('new_friend', addedFriendHandler)
      pusherClient.unbind('incoming_friend_requests', friendRequestHandler)
    }
  }, [sessionId])

  return (
    <Link
      href='/dashboard/requests'
      className='hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
      <div className='text-black border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white mr-3'>
        <User className='h-4 w-4' />
      </div>
      <p className='truncate'>Friend requests</p>

      {unseenRequestCount > 0 ? (
        <NotificationContainer>
          {unseenRequestCount}
        </NotificationContainer>
      ) : null}
    </Link>
  )
}

export default FriendRequestSidebarOptions
