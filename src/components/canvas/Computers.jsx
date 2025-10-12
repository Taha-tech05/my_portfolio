import react,{Suspense,useEffect,useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,Preload,useGLTF} from '@react-three/drei'
import CanvasLoader from "../Loader"

const Computers = ({isMobile}) => {
  const computer=useGLTF('./programmer/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={7.5} /> 
      <primitive 
        object={computer.scene} 
        scale={isMobile? 0.3:0.9}
        position={isMobile?[0.2,-2.4,-1.2]:[2.5,-4.3,-3.5]}
        rotation={[-0.01,-0.7,-0.01]}

      /> 
    </mesh>

  )
}

function ComputerCanvas(){
  const [isMobile,setIsMobile]=useState(false)

  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange=(event)=>{
       setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)
    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return(
    <Canvas 
      frameloop='demand'
      shadows
      camera={{position:[20,3,5],fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false} 
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2} 
        />
      <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas