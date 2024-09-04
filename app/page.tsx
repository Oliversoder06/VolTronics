import HPbox from '@/components/HPbox'
import ProductHP from '@/components/ProductHP'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col items-center w-full mt-20 max-w-[1440px] gap-24'>

        {/* BOX */}
        <HPbox />

        {/* SALES */}
        <section className='w-full flex flex-col gap-12'>
          <ProductHP title='Up to 25% SALE' />
          <ProductHP title='Our Best Sellers' />
          <ProductHP title='New Arrivals' />
        </section>
      </div>
    </div>
  )
}

export default Home