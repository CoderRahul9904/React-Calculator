import { BASIC_OF_CALCI } from "../../App.js"

export default function Buttons({ onSelect }) {
    return (
        <div className="grid grid-rows-4 grid-cols-4 gap-3 w-4/5 h-4/5 my-1">
            {BASIC_OF_CALCI.map((option, index) =>
                <button key={index} className={`bg-purple-600 cursor-pointer rounded-xl flex items-center justify-center ${option === '=' ? 'bg-purple-900' : ''}`} onClick={() => onSelect(option)}>
                    {option}
                </button>
            )
            }
        </div>
    )
}