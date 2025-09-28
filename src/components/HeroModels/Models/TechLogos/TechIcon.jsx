//For TechIcon we have to do some steps to display the 3D model:
// 1. Load a `.glb` model (GLTF format)
// 2. Add basic lighting
// 3. Apply environment reflections for realism
// 4. Wrap the model in floating animation
// 5. Disable zoom using OrbitControls

import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'
import * as THREE from 'three';

const TechIcon = ({model}) => {
    const scene=useGLTF(model.modelPath);
    useEffect(()=>{
        if(model.name==='Interactive Developer'){
            scene.scene.traverse((child)=>{
                if(child.isMesh && child.name==='Object_5'){
                    child.material = new THREE.MeshStandardMaterial({color:'white'})
                }
            })
        }
    })
    //This useEffect is for changing the color of the 3D object from black to white.
  return (
    <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5,5,5]} intensity={1}/>

        <Environment preset='city' />

        <OrbitControls enableZoom={false}/>

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon