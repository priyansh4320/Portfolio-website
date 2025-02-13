import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls ,useGLTF} from '@react-three/drei';
import { useRef,useState,Suspense, useMemo } from 'react';
import './App.css'

const Banana = ({position}:{position:[number,number,number]}) =>{
  
  const {scene} = useGLTF("/banana.glb");
  
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bananaRef = useRef<any>(0);
  const [y , setY] = useState(position[1]);
  const [rotation, setRotation] = useState([0, 0, 0]); 

  useFrame(() => {
    if (bananaRef.current) {
      if (y>-2) {
        setY((prevY)=>prevY-0.05);
        }
      else{
          setY(5);
        }
        bananaRef.current.position.y = y;

        setRotation(([rx, ry, rz]) => [rx + 0.02, ry + 0.03, rz + 0.01]);
        bananaRef.current.rotation.set(...rotation);
      
    }
  });
  return <primitive ref={bananaRef} object={clonedScene} position={[position[0], y, position[2]]} scale={10} />;
}

const App = () => {
  const bananaPos:[number,number,number][] = [
    [0, 2, 0],
    [2, 3, -2],
    [-2, -1, 1],
    [1, -3, 2],
    [-1, 1, -3],
    [3, -2, 1],   // New
    [-3, 2, -1],  // New
    [0, -4, 3],   // New
    [4, 1, -2],   // New
    [-4, -1, 2],  // New
    [2, 4, -3],   // New
    [-2, -3, 4],  // New
    [3, -3, -3],  // New
    [-3, 3, 3],   // New
    [0, 5, 0],    // New (one at the top
  ]
  return (
   <>
   <Canvas camera={{ position: [0, 0, 5] }} 
   style={{
    border:"solid 2px black",
    width:"100%",
    height:"100vh",
    background:"rgba(0,0,0,.1)",
   }}
   >
    <ambientLight intensity={.5} />
    <pointLight position={[1,1,1]}/>
      {/* <Banana  position={[0, 5, 0]}/> */}
      <Suspense fallback={null}>
      {bananaPos.map((position,index)=>(
        <Banana key={index} position={position}/>
      )) }
      </Suspense>
  </Canvas>  
  </>
  )
}
export default App;