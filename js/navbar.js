document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    // Initialize flag outside the click event listener
    var flag = 1;

    burgerMenu.addEventListener('click', function () {
        if (flag === 1) {
            // activate the toggle
            navList.classList.toggle('show');
            burgerMenu.classList.toggle('active');
            flag = 0;  // Use assignment (=) instead of comparison (===)
        } else if (flag === 0) {
            // remove the toggle
            navList.classList.remove('show');
            burgerMenu.classList.remove('active');
            flag = 1;  // Use assignment (=) instead of comparison (===)
        }
    });

    // Close the navigation links when a link is clicked
    // navList.addEventListener('click', function () {
    //     navList.classList.remove('show');
    //     burgerMenu.classList.remove('open');
    // });
});
