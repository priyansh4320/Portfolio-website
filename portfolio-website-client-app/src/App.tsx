// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
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
      <Text
      fontSize={.5} 
      color="black"
      position={[-3.5,3.25,0]}
      >
        Hello, I'm An AI Engineer
      </Text>
  </Canvas>
  </>
  )
}
export default App