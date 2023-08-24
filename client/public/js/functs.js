
// Function to get page url
// Returns url objects: pathname, hostname, href, port number, protocol
function getUrl() {
    return {
        path: window.location.pathname,
        host: window.location.host,
        href: window.location.href,
        port: window.location.port,
        prot: window.location.protocol
    }
}

// Function to get screen size 
// Returns screen width, avail width, height, avail height, pixels
function getScreenSize() {
    return {
        width: screen.width,
        a_width: screen.availWidth,
        height: screen.height,
        a_height: screen.availHeight,
        pixels: window.devicePixelRatio
    }
}

//Function to update app title: takes text as parameter
// Updates app title
function updateAppTitle(t) {
    return document.title = 'ORBITEX | ' + t;
}