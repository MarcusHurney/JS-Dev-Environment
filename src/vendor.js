// Having a separate bundle for vendor codes prevents the client
// from having to download all the vendor code again when a small portion of
// the code changes. They will only download vendor.js again when vendor code
// changes.

import fetch from 'whatwg-fetch';
