import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Model from '../src/Screen/Avtar';
import useControls from "r3f-native-orbitcontrols";
import * as THREE from 'three'; 
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

// Suppress console logs
console.log = function () {};

function Char(props) {
  const [Orbitcontrols, events] = useControls();
  return (
    <mesh {...events} scale={3.5} position={[0, -3.3, 0]}>
      <Orbitcontrols enablePan={false} />
      <Model />
    </mesh>
  );
}
function SetBackgroundColor({ color }) {
  const { gl, scene } = useThree();
  
  useEffect(() => {
    scene.background = new THREE.Color(color);
  }, [color, scene]);
  
  return null;
}

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.canvasContainer}>
        <Canvas
          style={styles.canvas}
          camera={{ position: [0, 0, 5] }}
          onCreated={(state) => {
            const _gl = state.gl.getContext();

            const pixelStorei = _gl.pixelStorei.bind(_gl);
            _gl.pixelStorei = function (...args) {
              const [parameter] = args;

              switch (parameter) {
                // expo-gl only supports the flipY param
                case _gl.UNPACK_FLIP_Y_WEBGL:
                  return pixelStorei(...args);
              }
            };
          }}
        >
          <SetBackgroundColor color="#CDF1EE" />
          <directionalLight
            intensity={4}
            position={[5, 5, 5]}
            color="white"
            castShadow={true}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[10, 10, 10]} />
          <Char />
        </Canvas>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Spend Smarter Save More</Text>
        <View style={styles.but}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Get Started</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',gap:10,marginTop:10}}>
          <Text>Already Have Account?</Text>
          <Text style={{color:'#3F8782'}}>Log In</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDF1EE',
  },
  canvasContainer: {
    flex: 2,
    
  },
  canvas: {
    height: '100%',
    width: '100%',
    marginTop:30
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop:50
  },
  text: {
    fontSize: 30,
    color: '#3F8782',
    fontWeight:'bold',
    width:'60%',
    textAlign:'center',
  },
  but:{
    width:'90%',
    height:'17%',
    backgroundColor:'#3F8782',
    borderRadius:40,
    marginTop:20,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  },
});
