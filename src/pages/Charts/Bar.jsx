import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, Category, ColumnSeries, DataLabel} from '@syncfusion/ej2-react-charts'
import { ChartsHeader } from '../../components'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {
    const { currentMode } = useStateContext()

  return (
    <div className='m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200'>
        <ChartsHeader category='Bar' title='Olympic Medal Count - RIO' />
        <div className="full">
            <ChartComponent
            id='Charts'
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            chartArea={{ border: { width:0 }}}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background:'white' }}
            tooltip={{ enable:true }}
            >
                <Inject services={[ColumnSeries, Tooltip, Legend, Category, DataLabel]} />
                <SeriesCollectionDirective>
                    {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </div>
  )
}

export default Bar