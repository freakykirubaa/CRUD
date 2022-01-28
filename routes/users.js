import express from  'express';

const router=express.Router();

let users=[
     

        
]

import { v4 as uuidv4 } from 'uuid';//unique id
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'





//get request
router.get('/',(req,res)=>{
        console.log(users);


res.send(users);
});


//post request
router.post('/',(req,res)=>{
        
        const user=req.body;
        users.push( {...user,id:uuidv4()})
        res.send(`User with the firstname ${user.firstName} added to the database`);

})



router.get('/:id',(req,res)=>{
        
        const {id}=req.params;

        const found=users.find((user)=>user.id===id);
        res.send(found);
})


//delete 
router.delete('/:id',(req,res)=>{
        const {id}=req.params;
       users=users.filter((user)=>user.id!==id);

       res.send(`User with id ${id} deleted from the database`)
})


//update
router.patch('/:id',(req,res)=>{
        const {id}=req.params;
       const {firstName,lastName,age}=req.body;
       const user=users.find((user)=>user.id===id);

       if(firstName)
               user.firstName=firstName;
       

       if(lastName)
        user.lastName=lastName;



        if(age)
        user.age=age;

       
res.send(`User with the id ${id} is updated successfully`);
})

export default router;
