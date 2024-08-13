'use client'

import { pusherClient } from '@/lib/pusher'
import { toPusherKey } from '@/lib/utils'
import { Message } from '@/lib/validations/message'
import { format } from 'date-fns'
import { FC, useEffect, useRef, useState } from 'react'

interface MessagesProps {
  initialMessages: Message[]
  sessionId: string
  chatId: string
  sessionImg: string | null | undefined
  chatPartner: User
}

const Messages: FC<MessagesProps> = ({
  initialMessages,
  sessionId,
  chatId,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  useEffect(() => {
    pusherClient.subscribe(
      toPusherKey(`chat:${chatId}`)
    )

    const messageHandler = (message: Message) => {
      setMessages((prev) => [message, ...prev])
    }

    pusherClient.bind('incoming-message', messageHandler)

    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`chat:${chatId}`)
      )
      pusherClient.unbind('incoming-message', messageHandler)
    }
  }, [chatId])

  const scrollDownRef = useRef<HTMLDivElement | null>(null)

  const formatTimestamp = (timestamp: number) => {
    return format(timestamp, 'HH:mm')
  }

  return (
    <div id='messages' style={{
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'flex-start',
      padding: '0.75rem',
      height: '100%',
      gap: '1rem',
      overflowY: 'scroll',
      scrollbarWidth: 'none'
    }}>
      <div ref={scrollDownRef} />
      {messages.map((message, index) => {
        const isCurrentUser = message.senderId === sessionId


        return (
          isCurrentUser ?
            <div key={`${message.id}-${message.timestamp}`}
              style={{
                display: 'flex',
                background: '#2e186a',
                borderRadius: '10px',
                padding: '10px',
                justifySelf: 'flex-end',
                alignSelf: 'flex-end',
                alignItems: 'center'
              }} >
              {message.text}{' '}
              <span className='ml-2 text-xs text-white-400'>
                {formatTimestamp(message.timestamp)}
              </span>
            </div>
            :
            <div key={`${message.id}-${message.timestamp}`}
              style={{
                display: 'flex',
                background: '#fe7624',
                borderRadius: '10px',
                padding: '10px',
                justifySelf: 'flex-end',
                alignSelf: 'flex-start',
                alignItems: 'center'
              }}
            >
              {message.text}{' '}
              <span className='ml-2 text-xs text-white-400'>
                {formatTimestamp(message.timestamp)}
              </span>
            </div>
        )
      })}
    </div>
  )


}

export default Messages
