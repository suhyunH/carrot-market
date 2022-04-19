import { FieldErrors, useForm } from 'react-hook-form'

interface LoginForm{
    username:string;
    password:string;
    email:string;
    errors?:string
}

export default function Forms(){
    const {register , handleSubmit, formState:{errors},setValue,setError} = useForm<LoginForm>({mode:"onChange"});
    //mode로 섭밋을 누를때 유효성검사할지 blur일때할지 결정가능. 디폴트값은 온섭밋
    const onValid=(data: LoginForm)=>{
        console.log("im valid bby");
        setError("errors", {message:"backend is offlind"})
    }
    const onInvalid= (errors:FieldErrors)=>{
        console.log(errors);
    }
    console.log(errors) // 함수밖에서도 formstate를 이용해 에러 확인가능. 

    setValue("username","hello") // username default message


    return (
    <form onSubmit={handleSubmit(onValid,onInvalid)}> 
        <input {...register("username", {
            required: "username is required", minLength:{
            message:"the username should be longer than 5 chars.",
            value:5,
        }})} 
        type="text" placeholder='Username' />
        <input {...register("email" , {
            required:"email is required",
            validate:{
                notGamil:(value)=>!value.includes("@gmail.com") || "gmail is not allowed"
            },
            })} type="email" placeholder='Email' 
            className={`${Boolean(errors.email?.message)? "border-red-500" :"" }`}/>
       {errors.email?.message}
       
       
        <input {...register("password" , {required:"password is required"})} type="password" placeholder='Password' />
        <input type="submit" value="Create Account" />
        {errors.errors?.message}
    </form>
    )
}