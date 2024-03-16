import React from 'react'

type Props = {
    children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <>{children}</>
  )
}

export default MainLayout