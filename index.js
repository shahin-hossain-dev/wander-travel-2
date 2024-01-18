console.log('JS is Connect')

const toggle = () => {

    const navBar = document.getElementById('nav-items');
    const displayWidth = document.documentElement.clientWidth;
    const display = navBar.computedStyleMap().get('display').value;
    console.log(displayWidth)

    if (display === 'none') {
        navBar.style.display = 'block';
        window.addEventListener('resize', event => {
            event.preventDefault();
            const value = event.target.innerWidth;
            if (value > 600) {
                navBar.style.display = 'flex'
            }
        })
    }
    else {
        navBar.style.display = 'none';
        window.addEventListener('resize', event => {
            event.preventDefault();
            const value = event.target.innerWidth;
            if (value > 600) {
                navBar.style.display = 'flex'
            }
            else {
                navBar.style.display = 'none';
            }
        })
    }

}