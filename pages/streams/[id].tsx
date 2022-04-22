import type { NextPage } from 'next';
import Layout from '@components/layout';
import Message from '@components/message';

const Stream: NextPage =()=>{
    return(
        <Layout canGoBack>

        <div className='py-10 px-4 space-y-4'>
            <div className='w-full rounded-md shadow-sm bg-slate-300 aspect-video' />
            <div className='mt-5'>
                <h3 className=' text-gray-800 font-semibold text-2xl mt-2'>Let's try potatos</h3>
                <span className="text-2xl block mt-3 text-gray-900">$140</span>
                <p className=" my-6 text-gray-700">
                My money&apos;s in that office, right? If she start giving me some
                bullshit about it ain&apos;t there, and we got to go someplace else
                and get it, I&apos;m gonna shoot you in the head then and there. Then
                I&apos;m gonna shoot that bitch in the kneecaps, find out where my
                goddamn money is. She gonna tell me too. Hey, look at me when I&apos;m
                talking to you, motherfucker. You listen: we go in there, and that
                ni**a Winston or anybody else is in there, you the first motherfucker
                to get shot. You understand?
                </p>
            </div>

            <div>
                <h3 className=' text-gray-800 font-semibold text-2xl mt-2'>Live chat</h3>
                <div className='mt-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4'>
                    <Message message='wow it is good deal, can i get it?'/>
                    <Message message='you should be hurry' reversed />
                    <Message message='i will buy it tomorrow'/>
                    <Message message='no sir. too late' reversed/>
                    <Message message='wow it is good deal, can i get it?'/>
                    <Message message='you should be hurry' reversed />
                    <Message message='i will buy it tomorrow'/>
                    <Message message='no sir. too late' reversed/>
                </div>
            </div>
            <div className='fixed w-full mx-auto max-w-md bottom-3 inset-x-0'>
                <div className='flex relative items-center'>
                <input type="text" className='shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500' />
                <div className='absolute inset-y-0 flex py-2 pr-1.5 right-0'>
                    <button className='flex items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>&rarr;</button>
                </div>
                </div>
            </div>

        </div>
        </Layout>
    )
}
export default Stream;