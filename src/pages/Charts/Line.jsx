import React from 'react'
import { ChartsHeader, LineChart } from '../../components'

const Line = () => {
  return (
    <div className='m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200'>
        <ChartsHeader category='Line' title="Inflation Rate" />
        <div className="w-full">
            <LineChart/>
        </div>
    </div>
  )
}

export default Line