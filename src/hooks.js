import { useState } from 'react';

function useFlip() {
    const [flipState, setFlipState] = useState(true)
    const flip = () => {
        setFlipState(oldFlipState => !oldFlipState);
    }

    return [flipState, flip];
}

export default useFlip;