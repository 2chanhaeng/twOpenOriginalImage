( () => {
'use strict';

window.xhr_monitor.add_monitor(
    'twOpenOriginalImage.tweet-capture',
    /^https:\/\/([^.]+\.)?(twitter|x).com\//,
    ['GET', 'POST',]
);

} )();
