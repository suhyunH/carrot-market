import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps{
  label:string;
  name:string;
  kind?:"text" | "phone" |"price";
  type:string;
  register: UseFormRegisterReturn;
  required:boolean;

}
export default function Input({label, name, kind="text", register, type, required}:InputProps){
    return(
        <>
         <div> 
            <label htmlFor={name} className='mb-1 block text-sm font-medium text-gray-700'>{label}</label>
            {kind ==="text"?(
              <div className='rounded-md shadow-sm relative flex items-center'>
              <input 
              id={name} 
              type={type} 
              required={required} 
              {...register} 
              className='pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'/>
            </div>
              ) : null}
          
            {/* <label htmlFor='price' className='mb-1 block text-sm font-medium text-gray-700'>Price</label> */}

            {kind ==="price"?(
              <div className='rounded-md shadow-sm relative flex items-center'>
              <div className='absolute left-0 pl-3 flex items-center justify-center'>
                <span className='text-gray-600 text-sm pointer-events-none'>$</span>
              </div>
              <input 
              id={name} 
              type={type} 
              {...register} 
              required={required}
              className='pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'/>
              <div className='absolute right-0 pr-3 flex items-center pointer-events-none'>
                <span className='text-gray-500'>USD</span>
              </div>
            </div>
              ) : null}
            {kind ==="phone" ?(
            <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
              ):null}
          </div>
        </>
    )
}