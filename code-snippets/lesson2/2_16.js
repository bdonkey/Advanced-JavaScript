function apiCall1( result ) { // Function that returns a promise
  return new Promise( ( resolve, reject ) => {
    resolve( 'value1' );
  } );
}
function apiCall2( result ) {// Function that returns a promise
  return new Promise( ( resolve, reject ) => {
    resolve( 'value2' );
  } );
}


const myPromise = new Promise( ( resolve, reject ) => {
  resolve( 'Promise was resolved!' );
} );

myPromise.then( apiCall1 ).then( apiCall2 ).then( result =>  console.log( 'done!') ) ;
