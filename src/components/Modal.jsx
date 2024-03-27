import { createPortal } from "react-dom"
import { useImperativeHandle, forwardRef, useRef } from "react"
const Modal=forwardRef(function Modal({onReset},ref) {
    const message=useRef()
    useImperativeHandle(ref, ()=>({
        open(){
            message.current.showModal()
        }
    }))
  return createPortal(
    <dialog ref={message} className='p-5 bg-purple-200'>
        <h1 className="font-serif font-semibold text-red-600 my-4 text-2xl">ALERT !!!</h1>
        <p className="text-stone-600 font-light my-2">Storage of History is full, in order to proceed further please delete the history.</p>
        <button onClick={onReset} className="bg-purple-400 p-1 m-auto rounded-md">Delete History</button>
        <form method='dialog' className="text-right">
            <button className="text-stone-900 bg-stone-400 hover:bg-green-300 p-1 rounded-sm hover:text-green-600 my-2">Close</button>
        </form>
    </dialog>,
    document.getElementById('root')
  )
})

export default Modal