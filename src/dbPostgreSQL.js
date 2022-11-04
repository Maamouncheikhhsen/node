const {Client}=require('pg')
const client=new Client({

        host:"127.0.0.1",
        port:5432,
        user:"maamoun",
        password:"maamoun",
        database:"B4C"

    
})


module.exports=client


