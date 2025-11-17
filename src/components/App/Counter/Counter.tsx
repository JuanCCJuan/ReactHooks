/* STYLES */
import styles from './Counter.module.css';

/* HOOKS */
import { useCounter } from '../../../hooks/useCounter';

// Interface para las props del counter
interface Props {
    steps?: number;
    initialValue?: number;
}

export const Counter = ({ initialValue = 0, steps = 1 }: Props) => {
    // Propiedades del contador
    const { counter, resetCounter, incrementCounter } = useCounter(initialValue, steps);

    return (
        <div className={ `center ${styles.base}` }>
            {/* CONTADOR */}
            <strong className={ styles.base__counter }>{ counter }</strong>

            {/* ACCIONES */}
            <div className={ styles.base__actions }>
                {/* Reiniciar */}
                <button className={ `bg-yellow-500 hover:bg-yellow-600 transition-all ${styles.action}` } onClick={ resetCounter }>
                    Reset
                </button>

                {/* Incrementar */}
                <button className={ `bg-teal-500 hover:bg-teal-600 transition-all ${styles.action}` } onClick={ incrementCounter }>
                    Increment
                </button>
            </div>
        </div>
    )
}
