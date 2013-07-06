# jQuery Bookmarlet Helper

This is a little plugin to make installing bookmarklets more understandable to ludites.

    $('a.bookmarklet').bookmarklet();

## Options
An object can be passed in to customize the appearance of the arrow.

The options available are color, position and linewidth

    $('a').bookmarklet({color: 'ff0000', position: 300, linewidth: 5})
