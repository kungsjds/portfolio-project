function menuAreaToggle() {
    const menuArea = document.querySelector('.header--menu-area');
    const menuLine = document.querySelectorAll('.header--menu-line');
    const menuButton = document.querySelector('.header--menu');

    if (menuArea.style.height == '266px') {
        menuArea.style.height = '0';
        menuButton.style.display = 'flex';
        
        menuLine[0].style.transform = 'rotate(0deg)';    
        menuLine[0].style.height = '3px';    
        menuLine[1].style.transform = 'rotate(0deg)';
        menuLine[2].style.transform = 'rotate(0deg)';        
    } else {
        menuArea.style.height = '266px';
        menuButton.style.display = 'inline-block';

        menuLine[0].style.transform = 'rotate(-240deg)';
        menuLine[0].style.height = '0';
        menuLine[1].style.transform = 'rotate(-240deg)';
        menuLine[2].style.transform = 'rotate(240deg)';
    };
};