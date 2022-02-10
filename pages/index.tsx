import type { NextPage } from 'next'
import FloatingBtn from '../components/floating-button';
import Item from '../components/item';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout title='홈' hasTabBar>

    <div className='flex flex-col space-y-5'>
     {[1,2,3,4,5,6].map((_,i)=>(
       <Item id={i} title="New iPhone 14" subtitle='Black' price={95} heart={1} comment={1} />
     ))}
 
      <FloatingBtn href="/items/upload">
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
