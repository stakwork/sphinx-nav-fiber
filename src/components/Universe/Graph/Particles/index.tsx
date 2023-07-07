import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { UNIVERSE_SCALE } from '../constant';

const particleCount = 2000;
const radiusLimit = UNIVERSE_SCALE*2

export const Particles: React.FC = () => {
    const ref = useRef<THREE.Points>(null);

    useFrame(() => {
      const positions = (ref.current?.geometry.getAttribute('position') as THREE.BufferAttribute).array as Float32Array;
      const velocities = (ref.current?.geometry.getAttribute('velocity') as THREE.BufferAttribute).array as Float32Array;

      if (positions && velocities) {
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];

          const vx = velocities[i];
          const vy = velocities[i + 1];
          const vz = velocities[i + 2];

          positions[i] += vx;
          positions[i + 1] += vy;
          positions[i + 2] += vz;

          const radius = Math.sqrt(x * x + y * y + z * z);
          const radiusSquared = radius * radius;

          if (radiusSquared > radiusLimit * radiusLimit) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 2;
            const newRadius = Math.random() * radiusLimit;

            positions[i] = Math.sin(theta) * Math.cos(phi) * newRadius;
            positions[i + 1] = Math.sin(theta) * Math.sin(phi) * newRadius;
            positions[i + 2] = Math.cos(theta) * newRadius;
          }
        }

        (ref.current?.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
      }
    });



    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    useEffect(() => {
      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;

        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        const radius = Math.random() * radiusLimit;

        positions[index] = Math.sin(theta) * Math.cos(phi) * radius;
        positions[index + 1] = Math.sin(theta) * Math.sin(phi) * radius;
        positions[index + 2] = Math.cos(theta) * radius;

        velocities[index] = (Math.random() - 0.5);
        velocities[index + 1] = (Math.random() - 0.5);
        velocities[index + 2] = (Math.random() - 0.5);
      }
    }, [particleCount, positions, velocities]);

    const geometry = useRef<THREE.BufferGeometry>(null);

    useEffect(() => {
      if (geometry.current && ref.current) {
        geometry.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.current.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        ref.current.geometry = geometry.current;
      }
    }, [positions, velocities]);

    const colorPalette = ['#00FFFF', '#FFFF00', '#FF7F50', '#FFB347', '#90EE90', '#F8F8FF'];

    useEffect(() => {
      if (geometry.current) {
        const colors = [];

        for (let i = 0; i < particleCount; i++) {
          const index = Math.floor(Math.random() * colorPalette.length);
          const colorHex = colorPalette[index];
          const color = new THREE.Color(colorHex);

          colors.push(color.r, color.g, color.b);
        }

        geometry.current.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
      }
    }, [particleCount, colorPalette]);

    return (
      <points  ref={ref} frustumCulled={false}>
        <bufferGeometry ref={geometry} />
        <pointsMaterial size={4} vertexColors transparent opacity={0.4} />
      </points>
    );
  };




