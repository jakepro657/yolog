"use client"
import useVh from '@/hooks/useVh'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function VhProvider({ children }: Props) {

    const loaded = useVh()

    return (
        <>
            {loaded && <>{children}</>}
        </>
    )
}

export default VhProvider