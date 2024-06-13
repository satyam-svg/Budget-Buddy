import React  from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('../satyam/Chair.glb'))
  return (
    <group {...props} dispose={null} scale={7} position={[0,-1.4,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model1.geometry}
        material={materials.koltuk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model2.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model3.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model4.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model5.geometry}
        material={materials.siyah}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model6.geometry}
        material={materials.altin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasted__model7.geometry}
        material={materials.koltuk}
      />
    </group>
  )
}

useGLTF.preload(require('../satyam/Chair.glb'))