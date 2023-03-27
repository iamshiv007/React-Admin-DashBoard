import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, Category, ColumnSeries, Legend, RangeColorSettingsDirective, RangeColorSettingDirective} from '@syncfusion/ej2-react-charts'
import { ChartsHeader } from '../../components'
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const ColorMapping = () => {
    const { currentMode } = useStateContext()

  return (
    <div className='m-2 p-2 pb-4 md:p-10 md:m-10 mt-24 md:rounded-3xl dark:bg-secondary-dark-bg rounded-xl bg-gray-200'>
        <ChartsHeader category='Color Mapping' title='USA CLIMATE - WEATHER BY MONTH' />
        <div className="full">
            <ChartComponent
            id='Charts'
            primaryXAxis={ColorMappingPrimaryXAxis}
            primaryYAxis={ColorMappingPrimaryYAxis}
            chartArea={{ border: { width:0 }}}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ mode:'range', background:'white' }}
            tooltip={{ enable:true }}
            >
                <Inject services={[ColumnSeries, Tooltip, Legend, Category]} />
                <SeriesCollectionDirective>
                    <SeriesDirective
                    dataSource={colorMappingData[0]}
                    name='USA'
                    xName='x'
                    yName='y'
                    type='Column'
                    cornerRadius={{
                        topLeft:10,
                        topRight:10
                    }}
                    />
                </SeriesCollectionDirective>
                <RangeColorSettingsDirective>
                    {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
                </RangeColorSettingsDirective>
            </ChartComponent>
        </div>
    </div>
  )
}

export default ColorMapping