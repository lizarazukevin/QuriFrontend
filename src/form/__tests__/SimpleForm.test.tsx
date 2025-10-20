import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Box } from '../SimpleForm.tsx';



describe('Box Component', () => {
    it('renders the box with text', () => {
        render(<Box text="Hello World!" />);
        const box = screen.getByTestId('box');
        expect(box).toBeDefined();
        expect(box.textContent).toBe('Hello World!');
    });
});
