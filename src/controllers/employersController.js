const bodyParser = require("body-parser");
const client=require('../dbPostgreSQL.js')
const con=require('../connectiondb.js');

const createEmployer=async(req,res)=>
{ //con(client)
    const Employer=req.body;
    console.log(Employer)
    console.log(Employer.FirstName)
    console.log(Employer.Team)

    let insertQuery=`insert into "B4CSolution"."Employer" ("FirstName","Team") 
     values('${Employer.FirstName}', '${Employer.Team}')`

    client.query(insertQuery, (err, result)=>
    {
        if(!err)
         {
            res.status(201).json({status:'Insertion was successful', data : Employer})
         }
        else
        {
            console.log(err.message) 
            {res.json({status:'Error', Error : err.message})}
        }
    })

 //client.end;
}

const getAllEmployer=async (req,res)=>
{//con(client);
    client.query(`Select * from "B4CSolution"."Employer"`, (err, result)=>
    {
        if(!err)
        { res.status(200).json({status:"employers: !", data:result.rows});}
        else
        { 
            console.log(err.message)
            res.status(404).json({status:"Error", Error: err.message})
        
        }
        
    });
    //client.end;
}


const getsingleEmployer=async(req,res)=>
{ //client.connect();
con(client);
    const Employer_id=req.params.Employer_id;
    console.log(Employer_id)
    client.query(`Select * from "B4CSolution"."Employer" where "Employer_id"='${Employer_id}'`, (err, result)=>
    {
        if(!err)
        {res.status(200).json({status:"employer: !", data: result.rows});}
        else
        {
            console.log(err.message) 
            res.status(404).json({status:"employer Not Found", Error: err.message})
        }
    });
    //client.end;
}

const updatedEmployer=async (req,res)=>
{ 
    //con(client);
    const {Employer_id}=req.params;
  const {FirstName}=req.body;
  const {Team}=req.body;
    let updateQuery=`UPDATE "B4CSolution"."Employer" SET "FirstName"='${FirstName}', "Team"='${Team}' 
                     WHERE "Employer_id"='${Employer_id}';`
    client.query(updateQuery,(err,result)=>{
    if(!err){
        res.status(201).json({status:'Update was successful', data: req.body });
            }
    else
    { 
        console.log(err.message)
        res.status(404).json({status:"Error", Error: err.message});
    }
    })
//client.end;

}

const patchEmployer=async(req,res)=>
{
//con(client);
    const {Employer_id}=req.params;
    const {FirstName}=req.body;
    const {Team}=req.body;
    let  updateQuery;
    if(FirstName)
      { 
        updateQuery=`UPDATE "B4CSolution"."Employer" SET "FirstName"='${FirstName}'
                        WHERE "Employer_id"='${Employer_id}';`
      }        
    else if(Team)
    {
        updateQuery=`UPDATE "B4CSolution"."Employer" SET "Team"='${Team}' 
                           WHERE "Employer_id"='${Employer_id}';`
    } 
            
    client.query(updateQuery,(err,result)=>
    {
            if(!err){
              res.status(201).json({status:'Update was successful', data: req.body });
                  }
            else
             { 
              console.log(err.message)
              res.status(404).json({status:"Error", Error: err.message});
            }
    })  
    
   
}

const deletedEmployer=async(req,res)=>
{ //con(client);
    const Employer_id=req.params.Employer_id;
    console.log(Employer_id)
 let insertQuery=`delete from "B4CSolution"."Employer" where "Employer_id"='${Employer_id}' `
  client.query(insertQuery,(err,result)=>{
    if(!err)
    {
        res.status(202).json({status:'Deletion was successful'})
    }
    else
    {
        console.log(err.message)
        res.status(404).json({status:"Error", Error: err.message})
    }
  })

}
 
module.exports={createEmployer, getAllEmployer, updatedEmployer, getsingleEmployer, deletedEmployer,patchEmployer};