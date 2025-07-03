import React from 'react'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full h-screen '>
        <div className='flex h-full w-full items-center justify-center'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-200 to-yellow-400 z-[-1]'>
            </div>
            {children}
        </div>
    </div>
  )
}


// por si tenemos un pagina vacia y necesitamos esto 
// copiamos el layout nomas