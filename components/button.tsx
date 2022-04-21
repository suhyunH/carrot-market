import { cls } from '../libs/client/utils'

interface ButtonProps{
    large?: boolean;
    text:string;
}

export default function Button({large=false, text}:ButtonProps){
    return(
        <button className={cls(" bg-orange-500 hover:bg-orange-600 text-white  px-3 rounded-md shadow-sm  font-medium border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none w-full", large?"flex-1 py-3":"mt-5 py-2 text-sm")}>{text}
    </button>
  
    )
}