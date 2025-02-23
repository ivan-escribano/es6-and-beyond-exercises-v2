/**
 * Exercise 14:
 *
 * 1. Create a `add` function that receives two number
 *    parameters and returns their sum
 *
 * 2. Export the function as a named export
 *
 * @example
 *
 * export function test() {
 *    return "something";
 * };
 */
const add = (a = 1, b = 2) => {
    return a + b;
};

export { add };
