import React from 'react';
import Register from '../register';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Render Register component', () => {
    it('should render register info', () => {
        const { getAllByText } = render(<Register />);

        expect(getAllByText(/Correo Electrónico/i)[0]).toBeInTheDocument();
    });
});