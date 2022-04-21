import Link from 'next/link';
import { useRouter } from 'next/router';
import { cls } from '../libs/client/utils';

interface LayoutProps{
    title?: string;
    canGoBack?:boolean;
    hasTabBar?:boolean;
    children:React.ReactNode;
}

export default function Layout({title, canGoBack, hasTabBar,children}:LayoutProps){
    const router = useRouter();
    const onClick=()=>{
        router.back();
    }
    return <div>
        <div className={cls(
            !canGoBack? "justify-center": "",
            'bg-white w-full max-w-xl text-lg font-medium fixed py-3 text-gray-700 border-b top-0 flex items-center'
        )}>
        {canGoBack? <button onClick={onClick}>&larr;</button>:null}
        {title? <span className='ml-3'> {title}</span>: null}
        </div>
        <div className={cls("pt-14", hasTabBar? "pb-24": "")}>
            {children}
        </div>
        {hasTabBar? <nav className='bg-white text-gray-800 w-full max-w-xl border-t fixed bottom-0 pb-6 pt-3 flex justify-between items-center'>
        <Link href="/">
            <a className={cls('flex flex-col items-center space-y-2 hover:text-orange-500 focus:text-orange-600', router.pathname ==='/'? 'text-orange-500':'')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <span> 홈 </span>
            </a>
        </Link>
        <Link href="/community">
            <a className={cls('flex flex-col items-center space-y-2 hover:text-orange-500 focus:text-orange-600', router.pathname ==='/community'? 'text-orange-500':'')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                <span>동네생활</span>
            </a>
        </Link>
        <Link href="/chats">
            <a className={cls('flex flex-col items-center space-y-2 hover:text-orange-500 focus:text-orange-600', router.pathname ==='/chats'? 'text-orange-500':'')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                <span>채팅방</span>
            </a>
        </Link>
        <Link href="/streams">
            <a className={cls('flex flex-col items-center space-y-2 hover:text-orange-500 focus:text-orange-600', router.pathname ==='/streams'? 'text-orange-500':'')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        <span>라이브</span>
            </a>
        </Link>
        <Link href="/profile">
            <a className={cls('flex flex-col items-center space-y-2 hover:text-orange-500 focus:text-orange-600', router.pathname ==='/profile'? 'text-orange-500':'')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>            <span>프로필</span>
            </a>
        </Link>
        </nav>:null}
    </div>
}
