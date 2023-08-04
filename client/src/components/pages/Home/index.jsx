import React from 'react'
import BannerSlider from './Banner/BannerSlider'
import FeaturedProduct from './FeaturedProduct'
import { useDisclosure } from '@chakra-ui/react';

const index = () => {
  return (
    <div className='max-w-[1280px] m-auto'>
      <BannerSlider/>
      <FeaturedProduct/>
    </div>
  )
}

export default index
