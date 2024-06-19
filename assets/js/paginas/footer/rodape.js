import * as fabricar from "../../core/Fabrica.js";

const footer = {
  tipo: 'footer',
  textContent: '© 2024 Minha Aplicação',
  style: {
    'box-sizing': 'border-box',
    background: '#f7b500',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default function fabricaRodape() {
  const novofooter = fabricar.criarContainer(footer);
  return novofooter;
}
