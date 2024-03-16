import React from 'react'

type Props = {
    children: React.ReactNode
}

function Background({ children }: Props) {
    return (
        <main className='min-w-screen min-h-real-screen relative w-screen sm:w-[500px] left-1/2 -translate-x-1/2'>
            <div className='w-full h-screen scrollbar-hide overflow-x-clip overflow-y-scroll absolute z-10 flex flex-col items-center'>
                {children}
            </div>
        </main>
    )
}

export default Background