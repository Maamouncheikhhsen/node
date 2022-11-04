const client=require('./dbPostgreSQL.js')

module.exports=function(client)
{
client.connect()
.then(()=>
    {
        console.log('connected to db')
   
    })
.catch(()=>
    {
        console.log('Unable to Connected to db')
    });

};