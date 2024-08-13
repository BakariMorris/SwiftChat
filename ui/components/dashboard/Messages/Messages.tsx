'use client'

import { pusherClient } from '@/lib/pusher'
import { cn, toPusherKey } from '@/lib/utils'
import { Message } from '@/lib/validations/message'
import { format } from 'date-fns'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import { MessageContainer, MessagesContainer, MyMessage, TheirMessage } from './styles'

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
  chatPartner,
  sessionImg,
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
    <MessagesContainer id='messages'>
      <div ref={scrollDownRef} />
      {messages.map((message, index) => {
        const isCurrentUser = message.senderId === sessionId

        const hasNextMessageFromSameUser =
          messages[index - 1]?.senderId === messages[index].senderId

        return (
          isCurrentUser ?
            <MyMessage key={`${message.id}-${message.timestamp}`} >{message.text}{' '}
              <span className='ml-2 text-xs text-white-400'>
                {formatTimestamp(message.timestamp)}
              </span>
            </MyMessage>
            :
            <TheirMessage key={`${message.id}-${message.timestamp}`} >
              {message.text}{' '}
              <span className='ml-2 text-xs text-white-400'>
                {formatTimestamp(message.timestamp)}
              </span>
            </TheirMessage>
        )
      })}
    </MessagesContainer>
  )

  {/* {hasNextMessageFromSameUser ? (
  <div className={'w-6 h-6'}>
  <Image fill src={isCurrentUser ? (sessionImg as string) : chatPartner.image}
    alt='Profile picture'
    referrerPolicy='no-referrer'
    className='rounded-full'
  />
  </div>):<></> } */}

}

export default Messages
