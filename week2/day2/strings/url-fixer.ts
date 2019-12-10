'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
//console.log(url);

let charactersArray: string[] = url.split('');
//console.log(charactersArray);

charactersArray.splice(5,0,':');
let urlcomplet: string = charactersArray.join(''); 

urlcomplet.replace('bots', 'odds');

console.log(urlcomplet);