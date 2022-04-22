import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';


async function handler(req:NextApiRequest, res:NextApiResponse){
    const {phone, email} = req.body;
    let user;
    if(email){
        user = await client.user.findUnique({
            where:{
                email:email //email,
            }
        });
        if(user) console.log("found it");
        if(!user){
            console.log("didnt find, will create")
           user = await client.user.create({
                data:{
                    name:"Anonymous",
                    email,
                }
            })
        }
        console.log(user);
    }
    if(phone){
        user = await client.user.findUnique({
            where:{
                phone: +phone,//number로 변경해줌 string으로 바꿔주고 싶으면 +""
            }
        });
        if(user) console.log("found it");
        if(!user){
            console.log("didnt find, will create")
           user = await client.user.create({
                data:{
                    name:"Anonymous",
                    phone:+phone, 
                }
            })
        }
        console.log(user);
    }
    return res.status(200).end();
}
export default withHandler("POST", handler);