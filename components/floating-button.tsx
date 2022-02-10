import Link from 'next/link';

interface FloatingBtnProps{
 children:React.ReactNode;
 href:string;
}

export default function FloatingBtn({children, href}:FloatingBtnProps){
    return(
   <Link href={href}>
    <a className='fixed hover:bg-orange-500 cursor-pointer bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl border-transparent text-white'>
        {children}
    </a>
   </Link>   
    )
}