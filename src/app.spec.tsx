import { describe, it, expect, afterEach } from 'vitest';
import App from './app';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(cleanup);

describe('App', () => {
  it('Renders', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeTruthy;
  });
});
