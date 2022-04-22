import { cls } from '@libs/client/utils'

interface MessageProps{
message:string;
reversed?:boolean;
}

export default function Message({message, reversed=false}:MessageProps){
    return (
        <div>
                <div className={cls('flex items-start space-x-2', reversed? 'space-x-reverse flex-row-reverse':'')}>
                <div className='w-8 h-8 rounded-full bg-slate-400'/>
                <div className='w-1/2 text-sm text-gray-700 p-2 border-2 rounded-md border-gray-300'>
                    <p>
                       {message}
                    </p>
                </div>
            </div>
        
         
       </div>
            
        
      
    )
}