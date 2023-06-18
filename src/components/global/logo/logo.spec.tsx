import { describe, it, expect, vi } from 'vitest';
import { Logo } from './logo';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Logo', () => {
  it('Renders', () => {
    render(<Logo />);
    expect(screen.getByRole('img')).toBeTruthy;
  });
  it('Renders as a SVG', () => {
    render(<Logo />);
    expect(screen.getByRole('img').tagName).toBe('svg');
  });
  it('Fires method on click', () => {
    const mockCallback = vi.fn();
    render(<Logo onClick={mockCallback} />);
    fireEvent.click(screen.getByRole('img'));
    expect(mockCallback).toBeCalledTimes(1);
  });
});
