import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloSeries, DateTime, Zoom, Logarithmic, Crosshair, Inject, Tooltip} from '@syncfusion/ej2-react-charts'
import { ChartsHeader } from '../../components'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const date1 = new Date('2017, 1, 1');

function filterValue(value){
    if( value.x >= date1){
        return value.x, value.high, value.low
    }
}

const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
    const { currentMode } = useStateContext()

  return (
    <div className='m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200'>
        <ChartsHeader category='Financial' title='AAPLE Historical' />
        <div className="w-full">
            <ChartComponent
            id='Charts'
            primaryXAxis={FinancialPrimaryXAxis}
            primaryYAxis={FinancialPrimaryYAxis}
            chartArea={{ border: { width:0 }}}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            tooltip={{ enable:true, shared:true }}
            crossHair={{ enable:true, lineType:'Vertical', line:{width:0}}}
            >
                <Inject services={[HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]} />
                <SeriesCollectionDirective>
                    <SeriesDirective
                    dataSource={returnValue}
                    xName='x'
                    yName='low'
                    name='Apple Inc'
                    type='Hilo'
                    low='low'
                    high='high'
                    />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </div>
  )
}

export default Financial