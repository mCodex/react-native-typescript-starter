import React from 'react';
import { render } from 'react-native-testing-library';

import Home from '../index';

describe('Home', () => {
  test('checking if Hello World text is being rendered', async () => {
    const { findByText } = render(<Home />);

    const pageContent = await findByText('Hello World');

    expect(pageContent).toBeTruthy();
  });
});
