// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import { Box } from '@react-three/drei';
import './App.css'

function App() {
  
  return (
   <>
   <Canvas camera={{ position: [0, 0, 5] }} 
   style={{
    border:"solid 2px black",
    width:"100%",
    height:"100vh",
    background:"rgba(0,0,0,0.1)"
   }}
   >
    <ambientLight intensity={.5} />
    <pointLight position={[1,1,1]}/>
      <Box args={[1,1,1]}>
        <meshStandardMaterial color={"red"} />
        <OrbitControls/>
      </Box>
  </Canvas>
  </>
  )
}
export default App