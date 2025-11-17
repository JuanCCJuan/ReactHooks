/* HOOKS */
import { useState } from 'react';

export const useCounter = ( initialValue: number, steps: number ) => {
    // Estado para el contador
    const [counter, setCounter] = useState<number>(initialValue);

    // Reinicia el contador
    const resetCounter = (): void => setCounter(initialValue);

    // Incrementa el contador
    const incrementCounter = (): void => setCounter(prev => prev + steps);

    return {
        counter, 
        resetCounter, 
        incrementCounter, 
    };
}