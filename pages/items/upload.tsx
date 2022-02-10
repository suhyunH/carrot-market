import type { NextPage } from "next";
import Button from '../../components/button';
import Layout from '../../components/layout';

 const Upload: NextPage = () => {
   return (
     <Layout canGoBack>

        <div className='px-4 py-16'>
          <div>
              <label  className='cursor-pointer w-full flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md text-gray-600 hover:text-orange-500 hover:border-orange-500'>
                <svg
                  className="h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input className='hidden' type="file" />
              </label>
            
          </div>
          <div className='my-5'> 
            <label htmlFor='name' className='mb-1 block text-sm font-medium text-gray-700'>Name</label>
            <div className='rounded-md shadow-sm relative flex items-center'>
              <input id="name" type="text"className='pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'/>
            </div>
          </div>
          <div className='my-5'> 
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
        <Button text='Upload product'/>

        </div>
     </Layout>
   );
 };

 export default Upload;