import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-1 bg-gray-200 rounded-3xl mt-24'>
      <Header category='App' title='Kanban' />
      <KanbanComponent
      id='kanban'
      keyField='Status'
      dataSource={kanbanData}
      cardSettings={{ contentField:'Summary', headerField:'Id'}}
      >
      <ColumnsDirective>
      {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban