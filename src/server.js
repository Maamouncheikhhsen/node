const express=require('express')
const client=require('./dbPostgreSQL.js')
var con=require('./connectiondb.js');

const EmployersRouter=require('./routes/employersRouter.js')
const app=express()

app.use(express.json());
app.use('/',EmployersRouter)
app.listen(3600,()=>{
    console.log('listeninig on port 3600')

})
//con(client)
client.connect()
.then(()=>{
    console.log('connected to db')
   })
.catch(()=>{
       console.log('Unable to Connected to db')
   })