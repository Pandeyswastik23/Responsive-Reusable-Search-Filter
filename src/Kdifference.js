
let nums = [ 1,1,1,1,1];
let temp = 0;
let k = 0;
let count = 0;



for ( let i = 0; i < nums.length; i++ )
{
    for ( let j = i + 1; j < nums.length; j++ )
    {
        if ( nums[ i ] > nums[ j ] )
        {
            temp = nums[ i ];
            nums[ i ] = nums[ j ];
            nums[ j ] = temp;
        }
    }
}

if ( k === 0 )
{
    
    var sorted_arr = nums.slice();
    var result = [];

    for ( let i = 0; i < sorted_arr.length; i++ )
    {
        if ( sorted_arr[ i + 1 ] === sorted_arr[ i ] )
        {
            result.push( sorted_arr[ i ] );
            var myResult = new Set( result );
            result = [ ...myResult ];

        }
    }
    
   
}

console.log( result.length );

let mySet = new Set( nums );
let array = [ ...mySet ];





for ( let i = 0; i < array.length; i++ )
{
    for ( let j = i + 1; j < array.length; j++ )
    {
        if ( ( array[ j ] - array[ i ] ) === k )
        {
            count += 1;
        }
    }
}

// return( count );