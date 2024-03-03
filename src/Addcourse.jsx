import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField"
import { Card } from '@mui/material';
import { useState } from 'react';

function Addcourse(){

    const [Title , setTitle] = useState("") ; 
    const [Description , setDescription] = useState("") ;

    return <div>

<div style={{display : 'flex' , justifyContent : "center"}}>

<Card variant='outlined' style={{width : 400 , padding :"15px"}}>

        <TextField onChange={(e)=>{setTitle(e.target.value)}} fullWidth = {true} label="Title" variant="outlined" type= {""}/>
        <br />
        <br />

        <TextField onChange={(e)=>{setDescription(e.target.value)}} fullWidth = {true} label="Description" variant="outlined" type= {""}/>
        <br />
        <br />

        <Button size='large' variant="contained" 

        onClick={()=>{ 
            
        function callback2(data){
            localStorage.setItem("token" , data.token) ; 
        }

        function callback1(res){
            res.json().then(callback2) ; 
        }

            
        fetch("http://localhost:3000/admin/courses" , {
            method :"POST" , 
            body : JSON.stringify({
                title: Title , description : Description , imageLink:"" , published : true
            }) , 

            headers : {
                "Content-type" : "application/json" , 
                "Authorization" : "Bearer " + localStorage.getItem("token") 
            }
        }).then(callback1) }}>Add Course</Button>

</Card>

    </div>

</div>

}

export default Addcourse