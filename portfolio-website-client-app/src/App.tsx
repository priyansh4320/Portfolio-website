
import './App.css'
import { AppBar } from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {List,ListItem , ListItemText} from '@mui/material';
import {Box} from '@mui/material';
const App = () => {
  
  return (
  <>
  <Box sx={{
    width:"100%",
    height:"100vh",
    alignItems:"center", 
    backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url('priyanshu3.png')", 
    backgroundColor:"rgba(0,0,0,.5)",
    backgroundSize:"contain",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"right",
    }}>
    <AppBar sx={{backgroundColor:"rgba(0,0,0,0.0)"}}>
      <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography  variant='h1' sx={{fontFamily:"montez, cursive",fontSize:"30px"}}> Priyanshu</Typography>
        <Box component="nav" >
          <List sx ={{display:"flex",justifyContent:"space-between"}}>
          {["Home", "Resume", "Portfolio", "Blog", "Content"].map((item)=>(
            <ListItem key={item}>
                <ListItemText primary={item} sx={{fontFamily:"'Roboto Mono', monospace",color:"white",px:"10px",py:"2px", fontSize:"10px"}}>
                </ListItemText>
            </ListItem>
          ))}
          </List> 
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  </>
  )
}
export default App;