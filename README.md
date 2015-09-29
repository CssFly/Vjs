# Vjs
Gulp project for modular Vanilla library (a bit JQuery style)

This project is intended to provide a ligweight solution for common JQuery like funtions like .addClass() or .toggleClass()

The design is modular and you can add new features by adding your function to the /js/quarks directory.
If you don't want already available functions for your personal V.js simply remove the correspondending file from /js/quarks directory.
Gulp will take care that your module will be added to or removed from V.js, wich can be used like JQuery:

<code> 
V(selector).addClass('cool').toggleClass('visible');
</code>

Your custom function will be encapsulated from global namespace.
You already have a list of DOM-Elements available (var elements).

Feel free to contribute.
