
import React, { useContext, useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { ThemeContext } from '../contexts/ThemeContext';

const Monitor= (props)=> {
  const { nodes, materials } = useGLTF('assets/models/monitor.glb')

  const screenTexture = useVideoTexture(props.texture, {
    start: true,
    muted: true,
    loop: true,
  });
  screenTexture.center.set(0.5, 0.5); 
  screenTexture.rotation = Math.PI / 2;


  const { isDarkMode } = useContext(ThemeContext);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Rough_Black_Texture_0.geometry}
            material={materials.Rough_Black_Texture}
          >
             <meshStandardMaterial
            attach="material"
            color={isDarkMode ? "#0778a5" : "gray"}
          />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Wallpaper_0.geometry}
            material={materials.Wallpaper}
          >
          <meshStandardMaterial map={screenTexture} />

            </mesh>
        </group>
      </group>
    </group>
  )
}

export default Monitor;

useGLTF.preload('assets/models/monitor.glb')
