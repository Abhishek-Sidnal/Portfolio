import React, { useRef, useEffect } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import gsap from "gsap";

const Laptop = (props) => {
  const { nodes, materials } = useGLTF("assets/models/laptop1.glb");

  const screenRef = useRef();
  const groupRef = useRef();

  const screenTexture = useVideoTexture(props.texture, {
    start: true, 
    muted: true,
    loop: true,
  });

  useEffect(() => {
    if (groupRef.current) {
      gsap.from(groupRef.current.rotation, {
        y: Math.PI / 2,
        duration: 1.5,
        ease: "power3.out",
      });
    }

    if (screenRef.current) {
      gsap.from(screenRef.current.rotation, {
        x: Math.PI / 2,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  }, [screenTexture]); 

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group position={[0, 0, -0.012]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Metal}
        >
          <meshStandardMaterial attach="material" color="gray" />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Plastic}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Metal_Port}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Plastic_pirple}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Contacts}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Material.010"]}
        ></mesh>
      </group>
      <group position={[0.153, 0.007, -0.082]} rotation={[0.4, 0, 0]} ref={screenRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Metal}
        ></mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Glass}
        ></mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.screen}
        >
          <meshStandardMaterial map={screenTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Camera_glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Metal_logo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Glass_logo}
        ></mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.Keyboard}
        position={[-0.065, -0.008, 0.018]}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.rubber}
        position={[0.139, 0.003, -0.065]}
      ></mesh>
    </group>
  );
};

export default Laptop;
useGLTF.preload("assets/models/laptop1.glb");
