import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import CanvasLoader from '../Loader';

const Computers = () => {
  const [active, setActive] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Computers</div>;
};

export default Computers;
