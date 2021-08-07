import { useEffect, useState } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
export const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};
