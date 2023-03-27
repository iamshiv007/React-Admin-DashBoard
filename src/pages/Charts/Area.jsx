import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend} from '@syncfusion/ej2-react-charts'
import { ChartsHeader } from '../../components'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {
    const { currentMode } = useStateContext()
  return (
    <div className='m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200'>
        <ChartsHeader category='Area' title='Inflation Rate in Percentage' />
        <div className="full">
            <ChartComponent
            id='Charts'
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width:0 }}}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background:'white' }}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </div>
  )
}

export default Area