const container = document.querySelector('.single_page');
const titleBox = document.querySelector('.title');

container.addEventListener('scroll', () => {
    console.log('Scrolling...');
    const header = document.querySelector('.header');
    const subheader = document.querySelector('.subheader');
    const viewportHeight = window.innerHeight;
    const rect = titleBox.getBoundingClientRect();

    // Add "visible" class when the element is in the viewport
    if (rect.top < viewportHeight && rect.bottom > 0) {
        header.classList.remove('scroll');
        subheader.classList.remove('appear');
    }
    // Remove "visible" class when the element leaves the viewport
    else {
        header.classList.add('scroll');
        subheader.classList.add('appear');
    }
});
