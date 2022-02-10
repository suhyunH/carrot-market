import type { NextPage } from 'next';
import Button from '../../components/button';
import Layout from '../../components/layout';

const Create: NextPage=()=>{
    return(
        <Layout canGoBack>

<div className='px-4 py-10 space-y-5'>
       <div> 
         <label htmlFor='name' className='mb-1 block text-sm font-medium text-gray-700'>Name</label>
         <div className='rounded-md shadow-sm relative flex items-center'>
           <input id="name" type="text"className='pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'/>
         </div>
       </div>
       <div > 
         <label htmlFor='price' className='mb-1 block text-sm font-medium text-gray-700'>Price</label>
         <div className='rounded-md shadow-sm relative flex items-center'>
           <div className='absolute left-0 pl-3 flex items-center justify-center'>
             <span className='text-gray-600 text-sm pointer-events-none'>$</span>
           </div>
           <input id="price" type="text" placeholder="0.00" className='pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'/>
           <div className='absolute right-0 pr-3 flex items-center pointer-events-none'>
             <span className='text-gray-500'>USD</span>
           </div>
         </div>
       </div>
       <div>
         <label className='mb-1 block text-sm font-medium text-gray-700'>Description</label>
           <textarea rows={4} className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500" />

       </div>
       <Button text='Go live' />
     </div>
        </Layout>
    );
}
export default Create;