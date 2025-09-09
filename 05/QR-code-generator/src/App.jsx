import React, { createElement, useRef } from 'react';
import { Alert, Form, Modal, QRCode } from 'antd';
import { ArrowDownToLine, Download  } from 'lucide-react';

const App=()=> {

  const divRef = useRef(null)
  const downloadit =()=>{
    const div = divRef.current
    const canvas = div.querySelector("canvas")
    const base64String = canvas.toDataURL("image/png")
    const a = document.createElement("a")
    a.href = base64String
    a.download = "qr-code.png"
    a.click()
    a.remove()    

  }

  return (
    <div className='bg-gray-900 h-screen py-12 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-12 '>Generate - QR CODE</h1>
      <div ref={divRef} className='mb-12 rounded-xl p-4 bg-white shadow-lg w-fit hover:scale-115 transition:transform duration-300 hover:shadow-2xl '>

        <QRCode
          value ='https://www.youtube.com/'
          size = {200}
          icon = 'data:image/png;base64,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'
          bgColor='white'
          color='black'

        />
      </div>

      <div className='flex gap-4'>
            <div className=" rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            
              <button 
              >
              Generate new QR</button>
            </div>

            <div className="flex rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            
              <ArrowDownToLine className='w-4 h-4' />
              <button 
                size='large' 
                onClick={downloadit}
              >
              Download</button>
            </div>

            <Modal open footer={null}>
              <h1 className='text-lg font-medium'>Generate your QR</h1>
              <Form>
                <Form.Item>
                  <input
                  size='large'
                  placeholder='https://domain.com'
                  />
                </Form.Item>
              </Form>
            </Modal>
            
      </div>

    </div>
  );
}

export default App;