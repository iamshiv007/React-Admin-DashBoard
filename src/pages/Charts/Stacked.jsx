import React from 'react'
import { ChartsHeader, Stacked } from '../../components'

const StackedChart = () => {
  return (
    <div className='m-2 p-2 md:p-10 md:m-10 mt-24 rounded-3xl bg-gray-200'>
        <ChartsHeader category='Stacked' title='Revenue Breakdown' />
        <div className="w-fu">
            <Stacked/>
        </div>
    </div>
  )
}

export default StackedChart