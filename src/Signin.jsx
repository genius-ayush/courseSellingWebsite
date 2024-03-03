import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Signin(){

    return (
        <div style={{}}>
            
                <div style={{paddingTop:"150px" , marginBottom : '10', display : 'flex' , justifyContent : "center"}}> <Typography variant={'h6'}> Welcome to PadhaiAdda. SignIn below </Typography></div>
                <br />

                <div style={{display : 'flex' , justifyContent : "center"}}>

                    <Card variant='outlined' style={{width : 400 , padding :"15px"}}>

                
                            <TextField id="outlined-basic" fullWidth = {true} label="User Name" variant="outlined"  />
                            <br />
                            <br />
                            <TextField id="outlined-basic" fullWidth = {true} label="Password" variant="outlined" type= {"password"}/>
                            <br />
                            <br />
                            <div style={{display : "flex" , justifyContent : "center"}}>

                                <Button size='large' variant="contained">Signin</Button>
                            </div>


                    </Card>

                </div>
            

        

        </div>
    )


}

export default Signin ; 