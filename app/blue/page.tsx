import Navbar from '../../components/Navbar'
export default function Blue(){
  return(
    <main>
      <Navbar />
      <div className='bg-blue-700 text-white text-center py-10'>
        <h1 className='text-4xl font-black'>BLUE AWAY CONCEPT</h1>
        <p className='font-bold mt-2'>From Logo Blue - Calm & Strong</p>
        <div className='grid grid-cols-2 gap-4 max-w-3xl mx-auto mt-6 px-4'>
          <img src='/kits/blue-1.jpg' className='rounded-xl bg-white' alt='' />
          <img src='/kits/blue-2.jpg' className='rounded-xl bg-white' alt='' />
        </div>
      </div>
      <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-4 p-6'>
        <div className='bg-white p-4 rounded shadow border-t-4 border-blue-700'>Blue Concept - Logo Blue</div>
        <div className='bg-white p-4 rounded shadow border-t-4 border-blue-700'>Next: vs KATAKA FC - Sat 4PM</div>
        <div className='bg-white p-4 rounded shadow border-t-4 border-blue-700'>GOFERE - Blue 2 Poses</div>
      </div>
    </main>
  )
}
