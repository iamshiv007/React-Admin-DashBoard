import React from 'react'
import { ChartsHeader, Stacked } from '../../components'

const StackedChart = () => {
  return (
    <div className='m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200'>
        <ChartsHeader category='Stacked' title='Revenue Breakdown' />
        <div className="w-fu">
            <Stacked/>
        </div>
    </div>
  )
}

export default StackedChart