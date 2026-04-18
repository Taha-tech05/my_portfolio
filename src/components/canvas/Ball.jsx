import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  // Memoize geometry args so icosahedron isn't recreated every render
  const geoArgs = useMemo(() => [1, 1], [])

  // Memoize the decal rotation to avoid creating a new array each render
  const decalRotation = useMemo(() => [2 * Math.PI, 0, 6.25], [])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={geoArgs} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={decalRotation}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas