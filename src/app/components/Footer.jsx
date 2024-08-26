import React from 'react'

export default function Footer() {
  return (
        <footer className='h-9 bg-slate-950 flex items-center justify-center text-white'>
      <p>&copy; Birthed in {(new Date().getFullYear())}</p>
    </footer>
  )
}
