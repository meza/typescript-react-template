import createRootReducer from './index';
import { combineReducers } from 'redux';
import { chance } from 'jest-chance';

jest.mock('redux', () => {
  return {
    combineReducers: jest.fn()
  };
});

describe('The root reducer', () => {
  it('is empty', () => {
    const mockCombineReducers = combineReducers as jest.Mock;
    const randomResult = chance.word();

    mockCombineReducers.mockReturnValue(randomResult);

    const actual = createRootReducer();

    expect(mockCombineReducers).toHaveBeenCalledWith({});
    expect(actual).toBe(randomResult);
  });
});
