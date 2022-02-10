import type { NextPage } from "next";
import Item from '../../components/item';
import Layout from '../../components/layout';

 const Bought: NextPage = () => {
   return (
     <Layout title='구매내역' canGoBack>

     <div className="flex flex-col space-y-5 py-10">
       {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
         <Item id={i} title="New iPhone 14" subtitle='Black' price={95} heart={1} comment={1}/>
       ))}
     </div>
     </Layout>
   );
 };

export default Bought;