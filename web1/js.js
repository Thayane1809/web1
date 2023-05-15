const bnt = document.querySelectorAll('.bnt');
let proximaCor = 'bnt2';

for (let i = 0; i < bnt.length; i++) {
  bnt[i].addEventListener('click', function() {
    if (proximaCor === 'bnt2') {
      this.style.backgroundColor = 'yellow';
      proximaCor = 'bnt3';
    } else if (proximaCor === 'bnt3') {
      this.style.backgroundColor = 'red';
      proximaCor = 'bn1';
    } else if (proximaCor === 'bn1') {
      this.style.backgroundColor = 'rgb(85, 227, 85)';
      proximaCor = 'bnt2';
    }
  });
}