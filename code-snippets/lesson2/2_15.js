// Resolve the promise with a value
const myPromise = new Promise( ( resolve, reject ) => {
  resolve( 'Promise was resolved!' );
} );

myPromise.finally( value => {
  console.log( 'Finally!' );
} );

// Expected output:
// Finally!
