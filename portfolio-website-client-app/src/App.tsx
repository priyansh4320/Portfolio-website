// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Canvas } from '@react-three/fiber';
import { OrbitControls ,useGLTF} from '@react-three/drei';
import './App.css'

const Banana = () =>{
  const {scene} = useGLTF("/banana.glb");
  return <primitive object={scene}  scale={10}/>
}

const App = () => {
  return (
   <>
   <Canvas camera={{ position: [0, 0, 5] }} 
   style={{
    border:"solid 2px black",
    width:"100%",
    height:"100vh",
    background:"rgba(0,0,0,.1)"
   }}
   >
    <ambientLight intensity={.5} />
    <pointLight position={[1,1,1]}/>
      <Banana/>
      <OrbitControls/>
  </Canvas>  
  </>
  )
}
export default App