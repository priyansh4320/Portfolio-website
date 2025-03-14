import { AppBar } from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {List,ListItem , ListItemText} from '@mui/material';
import {Box} from '@mui/material';
import {Button} from '@mui/material';
import {Grid2} from '@mui/material';
import Card from './cards';
const Dashboard = () => {
  const services =[
    ["agentflow.svg", "AgentFlow Architect", "An AI-driven framework for designing, orchestrating, and managing multi-agent workflows, enabling intelligent process automation and decision-making."],
    ["task.svg", "Task Automator AI", "A next-generation AI automation engine that streamlines complex workflows, leveraging machine learning to optimize efficiency and scalability."],
    ["conversation.svg", "Conversational AI Suite", "A cutting-edge AI-powered chatbot and virtual assistant platform designed for real-time, context-aware, and human-like interactions using advanced NLP models."],
    ["data.svg", "AI Data Insights", "A high-performance AI analytics system that extracts actionable insights from structured and unstructured data, facilitating predictive modeling and business intelligence."],
    ["agent.svg", "AI-Powered Dev Assistant", "An intelligent coding assistant that enhances software development by providing real-time code generation, error detection, and documentation automation."],
    ["document.svg", "AI Document Generator", "A sophisticated AI-powered document automation tool that produces contextually accurate, structured reports, contracts, and technical documentation."],
    ["voice.svg", "Neural Voice Assistant", "A state-of-the-art AI voice assistant leveraging real-time speech recognition and synthesis for seamless human-computer interaction."],
    ["search.svg", "Semantic Search Engine", "An AI-enhanced search system that employs deep learning and vector-based retrieval to deliver highly relevant, context-aware search results."],
    ["recommendor.svg", "Personalized AI Recommender", "An advanced recommendation engine that uses deep learning and behavioral analysis to provide dynamic, hyper-personalized content suggestions."],
  ]
  ;
  
  return (
  <>
  <Box sx={{
    width:"100%",
    height:"100dvh",
    alignItems:"center", 
    backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url('priyanshu3.png')", 
    backgroundColor:"rgba(0,0,0,.5)",
    backgroundSize:"contain",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"right",
    }}>
    <AppBar sx={{backgroundColor:"rgba(0,0,0,0.0)"}}>
      <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography  variant='h1' sx={{fontFamily:"montez, cursive",fontSize:"30px"}}> Priyanshu</Typography>
        <Box component="nav" >
          <List sx ={{display:"flex",justifyContent:"space-between",border:"none"}}>
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

    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",py:"200px",px:"10%"}}>
    <Typography variant='h3' sx={{fontFamily:"'Roboto Mono', monospace" ,color:"white"}}>
          Hey There, <br/>
          I Create AI That Thinks.<br/>  
          Great To Meet You!
    </Typography>
    <Button variant='contained' sx={{backgroundColor:"#6DECB9",size:"small",width:"20%",fontFamily:"'Roboto Mono', monospace",color:"black",my:"20px",borderRadius:"0px"}}>
          Chat with Me!
    </Button>
    </Box>
    <Grid2 spacing={2} sx={{display:'flex',justifyContent:"flex-start",px:"10%", fontFamily:"'Roboto Mono', monospace"}}>
          <Grid2 size={{xs:2,md:2}} sx={{px:"20px", borderRight:"solid white 2px", borderLeft:"solid white 2px" ,color:"grey"}} >
            <Typography sx={{color:"white"}}>Email</Typography>
              priyanshu@alvyl.com
          </Grid2>
          <Grid2 size={{xs:3,md:3}} sx={{px:"30px" ,color:"grey"}}>
            <Typography sx={{color:"white"}}>Phone</Typography>
              +91-9588623142
          </Grid2>
          <Grid2 size={{xs:3,md:3}} sx={{px:"20px", borderRight:"solid white 2px", borderLeft:"solid white 2px" ,color:"grey"}}>
            <Typography sx={{color:"white"}}>Location</Typography>
              Hyderabad, India.
          </Grid2>
    </Grid2>
  </Box>

  {/* Content */}
  <Box sx={{
    width:"100%",
    height:"80dvh",
    backgroundColor:"black",    
    display:"flex",
    justifyContent:"center",    
    }}>
    <Box sx={{width:"80%",height:"60%",backgroundColor:"black", my:"10%", display:"flex", justifyContent:"s", }}>
        <Box sx={{
          width:"30%",
          height:"100%", 
          backgroundImage:"url('priyanshu2.jpg');",
          backgroundSize:"Cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center" ,
          borderRadius:"20px",
          }}>
        </Box>
        <Box sx={{width:"70%",height:"100%",color:"grey" ,px:"20px"}}>
        <Typography variant='h6' sx={{fontFamily:"'Roboto Mono', monospace" ,color:"#6DECB9" , px:"10px",py:"5px"}}>
          Who am I?
        </Typography>
        <Typography variant='h5' sx={{fontFamily:"'Roboto Mono', monospace" ,color:"white",px:"10px",py:"10px"}}>
        A Passionate AI Developer.
        </Typography>
         I specializing in multi-agent systems, Retrieval-Augmented Generation (RAG), and scalable AI architectures. 
        🔥 Experienced in building cutting-edge solutions with Langgraph, Ollama, and CouchDB, optimizing automation and intelligence. 
        ⚡️ Driving innovation at the intersection of AI and software engineering to shape the future of smart automation!   
        <Grid2 sx={{display:"flex",justifyContent:"space-around", my:"20px",borderTop:"solid white 2px"}}>
          <Grid2 sx={{ color:"grey",my:"20px",}}>
              <Grid2 sx={{display:"flex",justifyContent:"flex-start"}}>
                <Typography  sx={{fontFamily:"'Roboto Mono', monospace" ,color:"white",px:"10px"}}>Name:</Typography> 
                Priyanshu Deshumkh
              </Grid2>
              <Grid2 sx={{display:"flex",justifyContent:"flex-start"}}>
                <Typography  sx={{fontFamily:"'Roboto Mono', monospace" ,color:"white",px:"10px"}}>Age:</Typography> 
                25
              </Grid2>
            <Grid2>
            </Grid2>
          </Grid2>
          <Grid2 sx={{ color:"grey",my:"20px",}}>
              <Grid2 sx={{display:"flex",justifyContent:"flex-start"}}>
                <Typography  sx={{fontFamily:"'Roboto Mono', monospace" ,color:"white",px:"10px"}}>From:</Typography> 
                Hyderabad, India.
              </Grid2>
              <Grid2 sx={{display:"flex",justifyContent:"flex-start"}}>
                <Typography  sx={{fontFamily:"'Roboto Mono', monospace" ,color:"white",px:"10px"}}>Email:</Typography> 
                priyanshu@alvyl.com
              </Grid2>
          </Grid2>
        </Grid2>
        <Button variant='contained' sx={{backgroundColor:"#6DECB9",size:"small",width:"30%",fontFamily:"'Roboto Mono', monospace",color:"black",borderRadius:"0px"}}>
            Download CV!
        </Button>      
    </Box>
    </Box>
  </Box>
  {/* Services */}
  <Box sx={{
    width:"100%",
    height:"150dvh",
    backgroundColor:"black"
  }}>
    <Box sx={{
    width:"100%",
    height:"15%",
    backgroundColor:"black",

    }}>
      <Typography variant='h3' sx={{
        color:"Black",
        textShadow: "2px 2px 0px #6DECB9, -2px -2px 0px white, 2px -2px 0px grey, -2px 2px 0px #6DECB9",
        px:"20px",
        fontWeight:"Bold",
        fontFamily:"montez, cursive",
        textAlign:"center",
        fontSize:"150px"
      }}>Services</Typography>
    </Box>
      <Box sx={{ width: "100%" ,py:"5%",alignContent:"center",display:"flex",justifyContent:"flex-end" }}>
        <Grid2  container spacing={10} sx={{ maxWidth: "100%",justifyContent:"center"  }}>
          {services.slice(0, 9).map((item,index) => (
              <Card key={index} icon={item[0]} title={item[1]} description={item[2] } />
          ))}
        </Grid2>
      </Box>
  </Box>
  </>
  )
}
export default Dashboard;