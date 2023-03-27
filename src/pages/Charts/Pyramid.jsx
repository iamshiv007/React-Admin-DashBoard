import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationTooltip, PyramidSeries, AccumulationSelection, AccumulationLegend, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 p-2 pb-4 md:m-10 mt-24 md:p-10 bg-gray-200 dark:bg-secondary-dark-bg md:rounded-3xl rounded-xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white'}}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode:'Drop', fill:'red'}}
              dataLabel={{
                visible:true,
                position:'Inside',
                name:'text'
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
