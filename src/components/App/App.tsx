/* STYLES */
import styles from './App.module.css';

/* DEPENDENCIES */
import { type JSX } from 'react';

/* COMPONENTS */
import { Counter } from './';

export const App = (): JSX.Element => {
    return (
        <main className={ `center ${styles.app}` }>
            <Counter />
        </main>
    );
}
