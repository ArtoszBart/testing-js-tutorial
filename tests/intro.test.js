import { describe, it, expect } from 'vitest';
import { fizzBuzz, max } from '../src/intro';

describe('max', () => {
	it('should return the first argument if it is greater', () => {
		const a = 2;
		const b = 1;

		const result = max(a, b);

		expect(result).toBe(2);
	});
	it('should return the second argument if it is greater', () => {
		expect(max(1, 2)).toBe(2);
	});
	it('should return the first argument if arguments are equal', () => {
		expect(max(1, 1)).toBe(1);
	});
});

describe('fizzBuzz', () => {
	it('should return "FizzBuzz" if the argument is devisible by 3 and 5', () => {
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});
	it('should return "Fizz" if the argument is only devisible by 3', () => {
		expect(fizzBuzz(3)).toBe('Fizz');
	});
	it('should return "Buzz" if the argument is only devisible by 5', () => {
		expect(fizzBuzz(5)).toBe('Buzz');
	});
	it('should return argument as a string if it is not devisible by 3 or 5', () => {
		expect(fizzBuzz(1)).toBe('1');
	});
});
