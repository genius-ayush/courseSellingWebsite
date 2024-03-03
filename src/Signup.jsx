import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
function Signup(){

    const [email , setEmail] = useState("") ;
    const [password , setPassword] = useState("") ; 
    return (
        <div>
              
            
                <div style={{paddingTop:"150px" , marginBottom : '10', display : 'flex' , justifyContent : "center"}}> <Typography variant={'h6'}> Welcome back to PadhaiAdda. SignUp below </Typography></div>
                <br />

                <div style={{display : 'flex' , justifyContent : "center"}}>

                    <Card variant='outlined' style={{width : 400 , padding :"15px"}}>

                        
                            <TextField onChange={(e)=>{setEmail(e.target.value)}} fullWidth = {true} label="User Name" variant="outlined"  />
                            <br />
                            <br />
                            <TextField onChange={(e)=>{setPassword(e.target.value)}} fullWidth = {true} label="Password" variant="outlined" type= {"password"}/>
                            <br />
                            <br />
                            <div style={{display : "flex" , justifyContent : "center"}}>

                                <Button size='large' variant="contained" onClick={()=>{  

                                    function callback2(data){
                                        localStorage.setItem("token" , data.token) ; 
                                    }

                                    function callback1(res){
                                        res.json().then(callback2) ; 
                                    }

                                        
                                    fetch("http://localhost:3000/admin/signup" , {
                                        method :"POST" , 
                                        body : JSON.stringify({
                                            username: email , password : password
                                        }) , 

                                        headers : {
                                            "Content-type" : "application/json"
                                        }
                                    }).then(callback1)
                                    
                                    }}>SignUp</Button>
                            </div>


                    </Card>

                </div>
            

        

        </div>
    )


}

export default Signup ; 