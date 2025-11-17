/* DEPENDENCIES */
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

/* COMPONENTS */
import { Counter } from './Counter';
describe('Counter', () => {
    beforeEach(() => {
        // Valores para el contador
        const steps: number = 5;
        const initialValue: number = 10;

        // Renderizado del componente
        render(<Counter initialValue={ initialValue } steps={ steps } />);
    });

    // Inicializa el contador
    test('Should initialize the counter', () => {
        // Contador
        const counter: HTMLElement = screen.getByRole('strong');
        const counterContent: number = Number(counter.textContent);
        
        expect(counterContent).toBe(10);
    });

    // Verifica el incremento del contador
    test('Should increment the counter', () => {
        // Contador y boton de incremento
        const counter: HTMLElement = screen.getByRole('strong');
        const incrementButton: HTMLElement = screen.getByText('Increment');

        fireEvent.click(incrementButton); // Incrementa

        // Contenido del contador
        const counterContent: number = Number(counter.textContent);

        expect(counterContent).toBe(15);
    });

    // Verifica el reseteo del contador
    test('Should reset the counter', () => {
        // Contador, boton de incremento y boton de reset
        const counter: HTMLElement = screen.getByRole('strong');
        const resetButton: HTMLElement = screen.getByText('Reset');
        const incrementButton: HTMLElement = screen.getByText('Increment');

        fireEvent.click(incrementButton); // Incrementa
        fireEvent.click(resetButton); // Resetea

        // Contenido del contador
        const counterContent = Number(counter.textContent);

        expect(counterContent).toBe(10);
    });
});