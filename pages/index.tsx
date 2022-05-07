import type { NextPage } from 'next'
import FloatingBtn from '@components/floating-button';
import Item from '@components/item';
import Layout from '@components/layout';
import useUser from '@libs/client/useUser';
import Head from 'next/head';

const Home: NextPage = () => {
  const {user, isLoading} = useUser();
  console.log(user);
  return (
    <Layout title='홈' hasTabBar>
      <Head><title>Home</title></Head>
    <div className='flex flex-col'>
     {[1,2,3,4,5,6].map((_,i)=>(
       <Item id={i} title="New iPhone 14" subtitle='Black' price={95} heart={1} comment={1} key={i}/>
     ))}
 
      <FloatingBtn href="/products/upload">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </FloatingBtn>
    </div>
    </Layout>
  );
}

export default Home
