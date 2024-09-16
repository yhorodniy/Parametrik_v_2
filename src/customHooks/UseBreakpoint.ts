import { useEffect, useState } from 'react';
import { breakpointsMap, breakpointsNames } from './constants';

const useBreakpoint = () => {
  const [breakPoint, setBreakPoint] = useState('mobile');
  const { mobileBp, tabletBp, laptopBp } = breakpointsMap;
  const { mobile, tablet, laptop, desktop } = breakpointsNames;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < mobileBp) {
        setBreakPoint(mobile);
      } else if (window.innerWidth < tabletBp) {
        setBreakPoint(tablet);
      } else if (window.innerWidth < laptopBp) {
        setBreakPoint(laptop);
      } else {
        setBreakPoint(desktop);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [desktop, laptop, laptopBp, mobile, mobileBp, tablet, tabletBp]);
  return breakPoint;
};

export default useBreakpoint;