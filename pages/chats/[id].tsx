import type { NextPage } from "next";
import Layout from '../../components/layout';
import Message from '../../components/message';

 const ChatDetail: NextPage = () => {
   return (
     <Layout canGoBack>

     <div className='py-10 px-4 space-y-4'>
      <Message message='Hi how much are you selling them for?'/>
      <Message message='i want $20' reversed/>
      <Message message='미쳤어'/>
     </div>
     <div className='fixed w-full mx-auto max-w-md bottom-3 inset-x-0'>
        <div className='flex relative items-center'>
          <input type="text" className='shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500' />
          <div className='absolute inset-y-0 flex py-2 pr-1.5 right-0'>
            <button className='flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>&rarr;</button>
          </div>
        </div>
      </div>
     </Layout>
   );
 };

 export default ChatDetail;