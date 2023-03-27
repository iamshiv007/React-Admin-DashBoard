import React from 'react'
import { ColumnsDirective, GridComponent, ColumnDirective, Sort, Filter, Page, Edit, Inject, Toolbar, Selection  } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  const selectionSettings = { persistSelection: true}
  const toolbarOptions = ['Delete']
  const editing = { allowDeleting: true, allowEditing: true}

  return (
    <div className='m-2 md:m-10 mt-24 p-2 pb-4 md:p-10 bg-gray-200 md:rounded-3xl rounded-xl'>
      <Header category='Page' title="Customers" />
      <GridComponent
      id='gridComp'
      dataSource={customersData}
      allowPaging
      allowSorting
      pageSettings={{ pageCount: 5}}
      editSettings={editing}
      selectionSettings={selectionSettings}
      toolbar={toolbarOptions}

      >
        <ColumnsDirective>
        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Selection, Sort, Toolbar, Filter, Page, Edit ]} />
      </GridComponent>
    </div>
  )
}

export default Customers