import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { chance } from 'jest-chance';

jest.mock('./app.i18n.ts');

describe('The app', () => {
  it('renders the hello world', () => {
    const component = renderer.create(<MemoryRouter initialEntries={['/']}><App/></MemoryRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the 404', () => {
    const random = chance.word();
    const component = renderer.create(<MemoryRouter initialEntries={[`/${random}`]}><App/></MemoryRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
