import { createUser } from './createUser';

test('it should create a user object with the given name and age', () => {
  const name = 'Alice';
  const age = 25;

  const user = createUser(name, age);

  expect(user).toEqual({ name, age });
});

test('it should handle undefined values correctly', () => {
  const name = undefined;
  const age = undefined;

  const user = createUser(name, age);

  expect(user).toEqual({ name: undefined, age: undefined });
});

test('it should handle null values correctly', () => {
  const name = null;
  const age = null;

  const user = createUser(name, age);

  expect(user).toEqual({ name: null, age: null });
});
