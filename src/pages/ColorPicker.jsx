import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const CustomColorPicker  = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />

const ColorPicker = () => {
  return (
    <div className='mt-24 p-2 pb-4 m-2 md:p-10 md:m-10 md:rounded-3xl rounded-xl bg-gray-200'>
      <Header category='App' title='Color Picker' />
      <div className="text-center">
        <div id='preview' />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div className="">
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <CustomColorPicker id='inline-palette' mode='Palette' />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <CustomColorPicker id='inline-picker' mode='Picker' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker