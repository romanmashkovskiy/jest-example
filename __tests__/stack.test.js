import makeStack from '../src/stack';

test('stack main flow', () => {
  const stack = makeStack();
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});

test('isEmpty', () => {
  const stack = makeStack();
  expect(stack).toHaveLength(0);
  stack.push('one');
  expect(stack).toHaveLength(1);
  stack.pop();
  expect(stack).toHaveLength(0);
});

test('pop empty stack', () => {
  const stack = makeStack();
  expect(stack.pop()).toBeUndefined();
});
