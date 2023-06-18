import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from './heading';

describe('Heading', () => {
  it('Renders', () => {
    render(<Heading type="h1">Heading</Heading>);
    expect(screen.getByText('Heading')).toBeTruthy;
  });
  it('Can rerender to different headings', () => {
    const { rerender } = render(<Heading type="h1">Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H1');
    rerender(<Heading type="h4">Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H4');
  });
});
