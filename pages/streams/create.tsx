import type { NextPage } from 'next';
import Button from '../../components/button';
import Input from '../../components/input';
import Layout from '../../components/layout';
import TextArea from '../../components/textArea';

const Create: NextPage=()=>{
    return(
        <Layout canGoBack>

        <div className='px-4 py-10 space-y-5'>
            <Input />

            <TextArea title='Description' rows={4}/>
            <Button text='Go live' />
          </div>
        </Layout>
    );
}
export default Create;