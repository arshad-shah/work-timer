//create a test that checks if the App component renders without crashing
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Work/i);
	expect(linkElement).toBeInTheDocument();
});
