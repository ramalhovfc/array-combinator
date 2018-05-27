'use strict';

const assert = require('assert');

const generateCombinations = require('../index.js');

describe( 'generateCombinations', () => {
	it( 'Should combine arrays of different sizes', () => {
		const data = [['a', 'b', 'c'], ['d'], ['e', 'f']];
		const combinations = generateCombinations( data );
		const expectedResult = [
			['a', 'd', 'e'],
			['b', 'd', 'e'],
			['c', 'd', 'e'],
			['a', 'd', 'f'],
			['b', 'd', 'f'],
			['c', 'd', 'f']
		];

		assert.equal( combinations.length, 3 * 1 * 2, 'Correct number of combinations' );
		assert.deepEqual( combinations, expectedResult, 'Combine elements in all possibilities' );
	} );

	it( 'Should combine if only one dimension is passed', () => {
		const data = [['a', 'b', 'c']];
		const combinations = generateCombinations( data );
		const expectedResult = [
			['a'],
			['b'],
			['c']
		];

		assert.equal( combinations.length, 3, 'Correct number of combinations' );
		assert.deepEqual( combinations, expectedResult, 'Combine elements in all possibilities' );
	} );

	it( 'Should be type agnostic', () => {
		const data = [['a', 'b'], [{}, undefined, null], [1]];
		const combinations = generateCombinations( data );
		const expectedResult = [
			['a', {}, 1],
			['b', {}, 1],
			['a', undefined, 1],
			['b', undefined, 1],
			['a', null, 1],
			['b', null, 1]
		];

		assert.equal( combinations.length, 6, 'Correct number of combinations' );
		assert.deepEqual( combinations, expectedResult, 'Combine elements in all possibilities' );
	} );

	it( 'Should deal with empty elements', () => {
		const data = [['a', 'b'], [], [1, 2], [undefined]];
		const combinations = generateCombinations( data );
		const expectedResult = [
			['a', undefined, 1, undefined],
			['b', undefined, 1, undefined],
			['a', undefined, 2, undefined],
			['b', undefined, 2, undefined]
		];

		assert.equal( combinations.length, 4, 'Correct number of combinations' );
		assert.deepEqual( combinations, expectedResult, 'Combine elements in all possibilities' );
	} );
} );
