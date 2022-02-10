import type {NextPage} from 'next'
import Link from 'next/link';
import Layout from '../../components/layout';

const Chats: NextPage=()=>{
    return <Layout title='채팅방' hasTabBar>

        <div className='py-10 divide-y-[1px]'>
            {[1,1,1,1,1,1,1].map((_,i)=>(
                <Link href={`/chats/${i}`} key={i}>
               <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-300" />
                    <div>
                        <p className="font-medium text-gray-700">Steve Jebs</p>
                        <p className="text-sm font-medium text-gray-500">
                            See you tomorrow in the corner at 2pm!</p>
                    </div>
                </a>
                </Link>
            ))}
        </div>
    </Layout>
}

export default Chats;