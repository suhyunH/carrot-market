import type { NextPage } from 'next';
import Link from 'next/link';
import FloatingBtn from '../../components/floating-button';
import Layout from '../../components/layout';

const Live: NextPage =()=>{
    return(
    <Layout title='라이브' hasTabBar>

    <div className='space-y-4 divide-y-[1px]'>
        {[1,1,1,1,1].map((_,i)=>(
            <Link href={`/streams/${i}`} key={i}>
                <a className="pt-4 block px-4">
                    <div className='w-full rounded-md shadow-sm bg-slate-300 aspect-video' />
                    <h1 className=' text-gray-700 text-lg mt-2'>Let's try potatos</h1>
                </a>
            </Link>
        ))}
        <FloatingBtn href='/streams/create'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      </FloatingBtn>
    </div>
    </Layout>
    )}
export default Live;