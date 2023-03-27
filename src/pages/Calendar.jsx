import React, { useState } from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop  } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const PropertyPane = (props) => <div className="mt-5">{props.children}</div>

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState()

  const change = (args) => {
    scheduleObj.selectedDate = args.value
    scheduleObj.dataBind()
  }

  const onDragStart = (arg) => {
    arg.navigation.enable = true
  }


  return (
    <div className='p-2 pb-4 m-2 mt-24 md:p-10 md:m-10 bg-gray-200 md:rounded-3xl rounded-xl'>
      <Header category="App" title='Calendar' />
      <ScheduleComponent
      height='650px'
      ref={(schedule) => setScheduleObj(schedule)}
      selectedDate={new Date(2023, 10, 3)}
      eventSettings={{ dataSource:scheduleData}}
      gragStart={onDragStart}
      >
        <ViewsDirective>
          {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item, index) => <ViewDirective key={index} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <PropertyPane>
        <table
        style={{ width:'100%', background:'white'}}
        >
          <tbody>
            <tr style={{ height:'50px' }}>
              <td style={{ width:'100%' }}>
                <DatePickerComponent
                value={new Date(2023, 10, 3)}
                showClearButton={false}
                placeholder="Current Date"
                floatLabelType="Always"
                change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  )
}

export default Calendar