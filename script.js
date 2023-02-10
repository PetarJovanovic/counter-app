const result = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', e => {
  if (e.target.closest('.add')) {
    result.innerHTML++;
  }

  if (e.target.closest('.subtract')) {
    result.innerHTML--;
  }

  if (e.target.closest('.reset')) {
    result.innerHTML = 0;
  }

  changeColor();
});

function changeColor() {
  if (result.innerHTML === '0') {
    result.style.color = 'white';
  }

  if (result.innerHTML > 0) {
    result.style.color = 'green';
  }

  if (result.innerHTML < 0) {
    result.style.color = 'red';
  }
}
