interface TextAreaProps{
 title:string;
 placeholder?:string;
 rows:number;
}


export default function TextArea({title, placeholder,rows}:TextAreaProps){
    return(
    <div>
         <label className='mb-1 block text-sm font-medium text-gray-700'>{title}</label>
           <textarea rows={rows} className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500" placeholder={placeholder}/>
       </div>
    )
}
