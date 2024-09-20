window.addEventListener('scroll', function() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progressWidth = (scrollPosition / totalHeight) * 100;

    // progress bar when scrolling past the "Now Reading:" paragraph
    const paragraphElement = document.querySelector('.col-lg-9 p');
    const triggerOffset = paragraphElement.offsetTop + paragraphElement.offsetHeight;

    //progress bar fixed after scrolling past the paragraph
    if (scrollPosition > triggerOffset) {
        document.querySelector('.progress-bar').style.position = 'fixed';
        document.querySelector('.progress-bar').style.top = '0'; // Adjusting to stick at the top
        document.querySelector('.progress-bar').style.visibility = 'visible';
    } else {
        document.querySelector('.progress-bar').style.position = 'absolute';
        document.querySelector('.progress-bar').style.top = '120px'; // Adjusting back to original position
        document.querySelector('.progress-bar').style.visibility = 'hidden';
    }

    document.querySelector('.progress').style.width = progressWidth + '%';
});
