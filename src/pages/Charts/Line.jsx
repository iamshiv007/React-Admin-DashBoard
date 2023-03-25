import React from 'react'
import { ChartsHeader, LineChart } from '../../components'

const Line = () => {
  return (
    <div className='m-2 p-2 md:p-10 md:m-10 mt-24 rounded-3xl bg-gray-200'>
        <ChartsHeader category='Line' title="Inflation Rate" />
        <div className="w-full">
            <LineChart/>
        </div>
    </div>
  )
}

export default Line