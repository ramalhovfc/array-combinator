
/**
 * Takes an array of arrays as input and returns all combinations that can be made using the elements of the inner array.
 *
 * @example
 *
 * const data = [['a', 'b', 'c'], ['d'], ['e', 'f']];
 * const combinations = generateCombinations( data );
 *
 * // outputs
 * // [['a','d','e'], ['a','d','f'], ['b','d','e'], ['b','d','f'], ['c','d','e'], ['c','d','f']]
 *
 * @param {Array.<Array.<*>>} data - Array of arrays of data to combine
 * @returns {Array.<Array.<*>>} The possible combinations for each elements of the array
 */
function generateCombinations( data ) {
	if ( !Array.isArray( data )) {
		return null;
	}
	for ( const e of data ) {
		if ( !Array.isArray( e ) ) {
			return null;
		}
	}

	/**
	 * Implements a n-ary counter where n is the number of elements of each element of the array
	 *
	 * @param {?Array.<number>} counter - The counter to update
	 * @param {Array.<Array.<*>>} data - Array of arrays of data to combine
	 * @returns {?Array.<number>}
	 */
	const updateCounter = function( counter, data ) {
		if ( counter[counter.length - 1] < data[data.length - 1].length ) {
			for ( let i = 0; i < counter.length; i++ ) {
				counter[i]++;
				if ( counter[i] >= data[i].length ) {
					counter[i] = 0;
				} else {
					return counter;
				}
			}
		}
	};
	const combinations = [];
	const counter = new Array( data.length ).fill( 0 );

	do {
		const c = [];
		for ( let i = 0; i < counter.length; i++ ) {
			c.push( data[i][counter[i]] );
		}
		combinations.push( c );
	} while ( updateCounter( counter, data ) );

	return combinations;
}

module.exports = generateCombinations;