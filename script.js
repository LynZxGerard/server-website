const scrollingText = document.querySelector('.scrolling-text');

function loopText() {
    const spans = scrollingText.querySelectorAll('span');
    const firstSpan = spans[0];
    const spanWidth = firstSpan.offsetWidth + 10; // Add extra space between spans

    if (scrollingText.scrollLeft >= spans.length * spanWidth) {
        scrollingText.scrollLeft = 0;
        scrollingText.appendChild(firstSpan);
    } else {
        scrollingText.scrollLeft++;
    }
}

setInterval(loopText, 10); // Adjust the interval speed as needed