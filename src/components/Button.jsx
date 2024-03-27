import { BASIC_OF_CALCI } from "../../App.js"

export default function Buttons({ onSelect }) {
    return (
        <div className="grid grid-rows-4 grid-cols-4 gap-3 w-4/5 h-4/5 my-1">
            {BASIC_OF_CALCI.map((option, index) => {
                let ButtonCss=`bg-purple-600 cursor-pointer rounded-xl flex items-center justify-center ${option === '=' ? 'bg-purple-900 hover:bg-purple-800' : ''}`
                if(option ==='Clear' || option ==='History'){
                    ButtonCss+=`col-span-2 p-2 bg-purple-900 hover:bg-purple-800 mb-2`
                }
                return (
                    <button key={index} className={ButtonCss} onClick={() => onSelect(option)}>
                        {option}
                    </button>
                )
            }
            )}
        </div>
    )
}