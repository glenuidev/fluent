// nicholas zackas
// maintainable javascript

creating JS (blank text editor)
if you go get coffee (you are maintaining code)
if you are opening code you are maintaining it

"code should work after you leave"

"your coworkers care"

"we all want to be rock stars"

"the stuff we do is not taught in college"

"your way == the best way !== the best way"

"Be kind to your future self"

"programs are meat to be read by humans and only incidentally for compoters to execute" - Knuth

maintainable code works for 5 years

when a new browser comes out your code should still work

------------------------
tabs / spaces: be a team player, pick one, stick with it, don not mix
-----------------


maintainable code:
- intuitive
- understandable (figure it out easily), if not, easy to introduce bugs
- adaptable, change without breaking
- debugable
- testable

Oreilly book creating maintainable code

Code Conventions:!!!!!!!!!!!!!!!!

Code Style
- style guide (ways developers communicate through the code)
- move from file to file to file
Style / Convention Guides:
- crockford
- google
- jquery core
- dojo
- idomatic.js

- Make lines as short as make sense (TO AVOID MERGE CONFLICTS)
- A few well places comments can convey short-hand as to what the code is doing (like seasoning)

// comments
do javadoc style for methods
- case / switch statements need good comments (leaving post-it notes for your future self - momento)
- if you stray off intuition, make a comment, e.g. if you think you have a good reason to do something, say why
- something that might be seen as a mistake

// naming:
- use logical names
- name it what it should be named
- variable noun, function verb
- returns booleans (is has)

// Casing
- camel casing (pick one and stick with it)
getElementById
innerHTML
XMLHttpRequest

Constand - like variables
HOOVER_DUDE

get the slide deck:

Debuggable: 
(moustache / handlebars js tempaltes?)
keep JS out of HTML!
(if you get an error you do not want to have to go to HTML, you want javascript)
Keep HTML ouf Javascript (you want to find it in the HTML layer not the JS)

Keep Javascript out of your CSS
_no css expressions!!!
finding these errors is nigh impossible (e.g. a nice way to mess with your friends)

Keep CSS out of javascript
keep .style out of javascript

Event handlers:
- should be small and only handle vevents

function handleClick (event ) {
	showPop(event.loc, event.loc);
}

function show popup (event) { // I hate passing an event object around, not sure what part of the event you care about
	
}

function show popup (x,y) { // I hate passing an event object around, not sure what part of the event you care about
	do it
}

Do NOT modify methods you do not own

Array.prototype.awYeah = function(){
	alert("aw yeah"); // mine field, nobody knows what to expect from the basic functionality if you extend it
    // if someone extends this in the future they don't know there is a collision (html5 adopting getElementsByClassName)
}


Do not override methods
YUI.use = function(){
	alert("awe yea");
}

-------
(Avoid global functions and variables)
-------


---------
errors
---------
Throw your own errors: when you know a function will fail (a post-it note you can leave yourself, helps poeple determine when a error might be prone)
hint: when you have to hunt something down and put in a break point...might be a clue, also where you use console.log..maybe use error throw
where you see an error or you are exposing an api where the argument is important to that function


---------
Avoid null comparisons (not specific enough, unless you had a var that was specifically set to null)
------------

use instanceof, typeof

// Separate config data
stuff that will change frequently, but it outside the application logic
do not want to risk messing up the application data
no not want to have to test something (regression) because

-----------------------------
Things that change frequently
-----------------------------
urls
strings that are displayed
any html that needs to be created from js
settings (items per page)
Repeated unique values (max number of x - constants)
any value that cna change in the future

github nzakas/props2js

Automation
- Build processes
- 

summary:
code style
loose coupling
good practices