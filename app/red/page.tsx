import Navbar from '../../components/Navbar'
export default function Red(){
  return(
    <main>
      <Navbar />
      <div className='bg-red-600 text-white text-center py-10'>
        <h1 className='text-4xl font-black'>RED AWAY CONCEPT</h1>
        <p className='font-bold mt-2'>Aggressive Edition by GOFERE</p>
        <div className='grid grid-cols-2 gap-4 max-w-3xl mx-auto mt-6 px-4'>
          <img src='/kits/red-1.jpg' className='rounded-xl bg-white' alt='' />
          <img src='/kits/red-2.jpg' className='rounded-xl bg-white' alt='' />
        </div>
      </div>
      <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-4 p-6'>
        <div className='bg-white p-4 rounded shadow border-t-4 border-red-600'>Red Concept - Power</div>
        <div className='bg-white p-4 rounded shadow border-t-4 border-red-600'>Next: vs KATAKA FC - Sat 4PM</div>
        <div className='bg-white p-4 rounded shadow border-t-4 border-red-600'>GOFERE - Red 2 Poses</div>
      </div>
    </main>
  )
}
