import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('./app.i18n.ts');

describe('The app', () => {
  it('renders the hello world', () => {
    const component = renderer.create(<App/>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
