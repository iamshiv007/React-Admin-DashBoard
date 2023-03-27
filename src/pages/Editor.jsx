import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { Header } from '../components'
import { EditorData } from '../data/dummy'

const Editor = () => {
  return (
    <div className='m-2 p-2 pb-4 md:m-10 md:p-10 mt-24 md:rounded-3xl rounded-xl bg-gray-200'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor