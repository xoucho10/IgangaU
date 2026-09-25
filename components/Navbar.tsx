import Link from 'next/link'
export default function Navbar(){
  return(
    <nav className='bg-black text-white sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='flex items-center gap-2 font-black'><img src='/logo.png' className='h-8 w-8 bg-white rounded-full' alt='' /> IGANGA UNITED F.C</div>
        <div className='flex gap-2 text-xs font-bold'>
          <Link href='/' className='bg-yellow-400 text-black px-4 py-2 rounded-full'>YELLOW</Link>
          <Link href='/red' className='bg-red-600 text-white px-4 py-2 rounded-full'>RED</Link>
          <Link href='/blue' className='bg-blue-700 text-white px-4 py-2 rounded-full'>BLUE</Link>
        </div>
      </div>
    </nav>
  )
}
