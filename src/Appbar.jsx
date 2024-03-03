import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Appbar(){
    const navigate = useNavigate() ; 
    return (
    <div  style={{paddingLeft :5 ,paddingRight : 30, display : "flex" , justifyContent : "space-between"}}>

        <div>

            <Typography variant='h6'>PadhaiAdda</Typography>

        </div>
        
        <div>

            <Button onClick={()=>{
                navigate("/signup")
            }} variant='contained'  style={{marginRight : 10}}>SignUp</Button>

            <Button onClick={()=>{
                navigate("/signin")}} variant='contained'>SignIn</Button>
        </div>





            </div>
            )
}

export default Appbar ; 