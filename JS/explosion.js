function addExplosion(event) {
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    document.body.appendChild(explosion);

    const buttonRect = event.target.getBoundingClientRect();
    explosion.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
    explosion.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

    explosion.addEventListener('animationend', () => {
        explosion.remove();
    });

    event.preventDefault();
}
