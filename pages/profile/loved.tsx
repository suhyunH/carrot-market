import type { NextPage } from "next";
import Item from '@components/item';
import Layout from '@components/layout';

 const Loved: NextPage = () => {
   return (
     <Layout title='관심내역' canGoBack>

<div className="flex flex-col">
       {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
         <Item id={i} title="New iPhone 14" subtitle='Black' price={95} heart={1} comment={1} key={i}/>
       ))}
     </div>
     </Layout>
   );
 };

 export default Loved;