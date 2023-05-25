import { useState, useEffect } from 'react';

function useAnimationRender() {
  const [isShowBox, setIsShowBox] = useState(false);
  useEffect(() => {

    setTimeout(() => setIsShowBox(true));
  }, []);

  return isShowBox;
}

export default useAnimationRender;