export default function Display({display}){
    return(
        <input  value={display} className="w-4/5 cursor-pointer bg-red  bg-gray-800 text-right my-5 py-6 text-white rounded-lg shadow-md border border-purple-600 focus:border-none outline-none" readOnly></input>
    )
}