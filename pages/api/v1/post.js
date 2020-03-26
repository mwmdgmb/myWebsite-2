import axios from 'axios' ;
const URL_BASE = "https://jsonplaceholder.typicode.com/posts" ;

export default async (req , res)=>{

    if(req.method === "POST"){
        const postData = JSON.parse(req.body) ;
        console.log(postData);

        return res.json({
            status : "Saving Post to DB" ,
            ...postData
        })
    }else {

        const post = await axios.get(URL_BASE);
        const sliced = post.data ;
        return res.json(sliced.slice(0,20));
    }
}