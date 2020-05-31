var triviaBtns = document.querySelectorAll('.trivia-button');
var triviaContents = document.querySelectorAll('.trivia-contents');

function showPopOver(event) {
    targetID = event.target.getAttribute('id');
    identifier = targetID.match(/trivia-id-(.*)/)[1];
    popOverID = 'trivia-content-' + identifier;
    popOver = document.getElementById(popOverID);
    popOver.classList.remove('inactive');
    popOver.classList.add('active');

    box_rect = popOver.parentElement.getBoundingClientRect();
    rect = popOver.getBoundingClientRect();

    xPos = event.clientX - box_rect['x'];
    yPos = event.clientY - box_rect['y'];

    popCoverage = rect['width']/box_rect['width'];
    position = xPos/box_rect['width'];

    // console.log("Pop-over width: "+popCoverage+", Position: "+position);

    //Find the start of the left edge depending on popOver's width and the position

    // Try to place on the right
    if (position + popCoverage + 0.1 < 1) {
        popOver.style.left = xPos + 'px';
    }
    //Try to place on the left
    else if (position > popCoverage + 0.1) {
        popOver.style.left = xPos - rect['width'] + 'px';
    }
    //Box doesn't fit properly in the left or right of the clicked position.
    else {
        offset = 1 - position - (popCoverage + 0.1);
        xPos = (xPos + offset * box_rect['width']) + 'px';
        popOver.style.left = xPos + 'px';
    }
    
    popOver.style.top = yPos + 'px';

}

function hidePopOver(event) {
    targetID = event.target.getAttribute('id');
    identifier = targetID.match(/trivia-id-(.*)/)[1];
    popOverID = 'trivia-content-' + identifier;
    popOver = document.getElementById(popOverID);
    popOver.classList.remove('active');
    popOver.classList.add('inactive');
}

triviaBtns.forEach(function(triviaBtn){
    triviaBtn.addEventListener('mouseover', showPopOver);
    triviaBtn.addEventListener('mouseout', hidePopOver);
});