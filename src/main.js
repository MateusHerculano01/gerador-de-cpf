import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

function init() {
  geradorCPF();

}

function geradorCPF() {
  const gera = new GeraCPF();
  const newCPF = document.getElementById('newCPF');
  const inputCPF = document.getElementById('text');

  newCPF.addEventListener('click', event=> {
    inputCPF.value = '';
    inputCPF.value = gera.geraNovoCpf();
  });
}

init();
