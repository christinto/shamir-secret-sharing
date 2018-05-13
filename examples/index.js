// var http = require('http');
var secrets = require('../secrets.js');

var threshold = 5;
var totalShares = 10;


// generate a 512-bit key
var key = secrets.random(512); // => key is a hex string
console.log("Randomly Generated Key:",key,"\n");


// split into 10 shares with a threshold of 5
var shares = secrets.share(key,totalShares, threshold);
console.log("Array of shares with threshold",threshold,"within a total of",totalShares,"shared pieces:  \n",shares,"\n");

// combining 4 shares to check if it works

testKey = shares.slice(0,4)
var comb = secrets.combine( testKey );
console.log("Keys used:",testKey.length,"\n",testKey,"\n Can create original secret:", comb === key,"\n");


// combine 5 shares to verify if it works
testKey = shares.slice(4,9)
comb = secrets.combine( testKey );
console.log("Keys used:",testKey.length,"\n",testKey,"\n Can create original secret:", comb === key,"\n");

var key1 = sjcl.codec.utf8String.toBits("key");
var out = (new sjcl.misc.hmac(key1, sjcl.hash.sha256)).mac("The quick brown fox jumps over the lazy dog");
var hmac = sjcl.codec.hex.fromBits(out)
console.log(hmac);

//

  //
  //
  // var key, comb, shares, newShare;
  //
  // key = secrets.random(512);
  // console.log("Key:",key);
  //
  // shares = secrets.share(key, 10, 5);
  // console.log("Shares:",shares);
  //
  // comb = secrets.combine( shares.slice(1,6) );
  // console.log("comb:",comb);
  //
  // newShare = secrets.newShare(8, shares);
  // console.log("newShare:",newShare);
  //
  // comb = secrets.combine( shares.slice(1,4).concat(newShare) );
  // console.log("comb:",comb);
