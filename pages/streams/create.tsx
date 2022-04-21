import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Button from '../../components/button';
import Input from '../../components/input';
import Layout from '../../components/layout';
import TextArea from '../../components/textArea';
interface CreateForm{
    name:string;
    price:string;
    description:string;
}
const Create: NextPage=()=>{
    const{register} =useForm<CreateForm>();
    return(
        <Layout canGoBack>

        <div className='px-4 py-10 space-y-5'>
            <Input register={register("name")} required label="Name" name="name" type="text"/>
            <TextArea title='Description' rows={4}/>
            <Button text='Go live' />
          </div>
        </Layout>
    );
}
export default Create;