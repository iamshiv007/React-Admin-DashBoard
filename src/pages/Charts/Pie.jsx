import React from 'react'

import { pieChartData } from '../../data/dummy'
import { ChartsHeader, Doughnut as PieChart } from '../../components'

const Pie = () => {
  return (
    <div className='m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200'>
        <ChartsHeader category='Pie' title="Project Cost Breakdown" />
        <div className="w-full">
            <PieChart id='chart-pie' data={pieChartData} legendVisibility height="full" />
        </div>
    </div>
  )
}

export default Pie