import React, { Component } from 'react'
import { Sphere, MeshDistortMaterial } from "@react-three/drei"

export default class AboutMeSphere extends Component {
    render() {
        return (
            <Sphere visible args={[1, 100, 200]} scale={1.5}>
                <MeshDistortMaterial
                    color="#932F6D"
                    attach="material"
                    distort={1}
                    speed={1.5}
                    roughness={1}
                />
            </Sphere>
        )
    }
}
