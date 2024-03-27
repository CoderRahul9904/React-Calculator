import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function History({ history, onCancel, reset }) {
  let count = 1;
  const modal=useRef()
  if(history.length > 13){
    modal.current.open()
    count=1
  }
  return (
    <>
      <div className='bg-gray-300 border-4 border-purple-700 w-[15rem]  h-3/5 rounded-lg'>
        <div className="flex justify-around my-5">
          <h2 className="text-gray-700 font-sans font-bold p-1 bg-purple-400 rounded-sm">HISTORY</h2>
          <button onClick={onCancel} className="text-black hover:text-red-600 bg-stone-600 hover:bg-red-400 px-1 rounded-sm my-1" >X</button>
        </div>
        <section className="my-3 ">
          {history.map((item, id) => {
            let update = eval(item);
            if (!Number.isInteger(update)) {
              update = update.toFixed(3);
            }
            update = update.toString();     
            return (
              <p key={id} className="font-light text-black mx-11">{count++}.) {item} = {update}</p>   
            );
          })}

        </section>
        <Modal onReset={reset} ref={modal}/>
      </div>
    </>
  )
}