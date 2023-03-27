import React from 'react'
import { ColumnsDirective, GridComponent, ColumnDirective, Resize, ContextMenu, Sort, Filter, ExcelExport, Page, Edit, Inject, PdfExport  } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true}

  return (
    <div className='m-2 md:m-10 mt-24 p-2 pb-4 md:p-10 bg-gray-200 md:rounded-3xl rounded-xl'>
      <Header category='Page' title="Orders" />
      <GridComponent
      id='gridComp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      contextMenuItems={contextMenuItems}
      editSettings={editing}
      >
        <ColumnsDirective>
        {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, Edit, ExcelExport, PdfExport ]} />
      </GridComponent>
    </div>
  )
}

export default Orders