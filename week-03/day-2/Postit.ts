'use strict'

/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;
    
constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor
    this.text = text
    this.textColor = textColor
    }
}

let i1 = new PostIt("orange","pink","yellow");
let i2 = new PostIt("Idea 1", "Awesome", "Superb!");
let i3 = new PostIt("blue","black","green");

console.log(i1,i2,i3);