import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Home page', () => {
  it('renders the starter heading', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { name: /to get started, edit the page\.tsx file\./i }),
    ).toBeInTheDocument();
  });
});
