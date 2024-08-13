'use client'

import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
    {/* Utilizes context to provide notifications sitewide */}
      <Toaster position='top-center' reverseOrder={false} />
      {children}
    </>
  )
}

export default Providers
