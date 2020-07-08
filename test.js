// Create (homemade) parse event
let parseEvent = new Event('parse');

// Create Initialising Function which can be run at any time
const initialiseParseableElements = () => {

    // Get all the elements which need to respond to an onparse event
    let elementsWithParseEventListener = document.querySelectorAll('[data-onparse]');

    // Attach Event Listeners and Dispatch Events
    elementsWithParseEventListener.forEach((elementWithParseEventListener) => {

        elementWithParseEventListener.addEventListener('parse', updateParseEventTarget, false);
        elementWithParseEventListener.dataset.onparsed = elementWithParseEventListener.dataset.onparse;
        elementWithParseEventListener.removeAttribute('data-onparse');
        elementWithParseEventListener.dispatchEvent(parseEvent);
    });
}

// Callback function for the Parse Event Listener
const updateParseEventTarget = (e) => {

    switch (e.target.dataset.onparsed) {

        case ('update-1'): e.target.textContent = 'My First Updated Heading'; break;
        case ('update-2'): e.target.textContent = 'My Second Updated Heading'; break;
        case ('update-3'): e.target.textContent = 'My Third Updated Heading'; break;
        case ('run-oQuickReply.swap()'): e.target.innerHTML = 'This <code>&lt;div&gt;</code> is now loaded and the function <code>oQuickReply.swap()</code> will run...'; break;
    }
}

// Run Initialising Function
initialiseParseableElements();

let dynamicHeading = document.createElement('h3');
dynamicHeading.textContent = 'Heading Text';
dynamicHeading.dataset.onparse = 'update-3';

setTimeout(() => {

    // Add new element to page after time delay
    document.body.appendChild(dynamicHeading);

    // Re-run Initialising Function
    initialiseParseableElements();

}, 3000);