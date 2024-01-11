import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TextDisplay from '../TextDisplay';

describe('TextDisplay', () => {
    it('renders the text prop', () => {
        const { getByText } = render(<TextDisplay text='Test text' />);
        expect(getByText('Test text')).toBeInTheDocument();
    });
});
