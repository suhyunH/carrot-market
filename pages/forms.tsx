import { FieldErrors, useForm } from 'react-hook-form'

interface LoginForm{
    username:string;
    password:string;
    email:string;
}

export default function Forms(){
    const {register , handleSubmit} = useForm<LoginForm>();
    const onValid=(data: LoginForm)=>{
        console.log("im valid bby");
    }
    const onInvalid= (errors:FieldErrors)=>{
        console.log(errors);
    }
    return (
    <form onSubmit={handleSubmit(onValid,onInvalid)}> 
        <input {...register("username", {required: "username is required"})} type="text" placeholder='Username' />
        <input {...register("email" , {required:"email is required"})} type="email" placeholder='Email' />
        <input {...register("password" , {required:"password is required"})} type="password" placeholder='Password' />
        <input type="submit" value="Create Account" />
    </form>
    )
}