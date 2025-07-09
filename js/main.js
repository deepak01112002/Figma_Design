document.addEventListener('DOMContentLoaded', function () {
  const outerBox = document.querySelector('.outer-box');
  const boxes = outerBox.querySelectorAll('.box');
  const radios = outerBox.querySelectorAll('.box-radio');

  function expandBoxByRadio(selectedRadio) {
    boxes.forEach(box => {
      const radio = box.querySelector('.box-radio');
      if (radio === selectedRadio) {
        box.classList.add('box--expanded');
      } else {
        box.classList.remove('box--expanded');
      }
    });
  }

  // Expand the checked radio by default
  radios.forEach(radio => {
    if (radio.checked) {
      expandBoxByRadio(radio);
    }
    radio.addEventListener('change', function () {
      if (radio.checked) {
        expandBoxByRadio(radio);
      }
    });
  });
}); 