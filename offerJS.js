const listItem = document.querySelectorAll('li');

function fadeIn() {
  listItem.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowBottom = window.innerHeight;

    if (itemTop < windowBottom) {
      item.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', fadeIn);
