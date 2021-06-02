import { simpleTag } from '../../helper';
import './foneForm.scss';

const foneModal = {
  modalTemplate: `<div class="modal-owerlay">
    <div class="modal-window">
      <form action="">
        <div class="introduction">
          Заполните форму и закажите бесплатную консультацию
        </div> 
        <input class="input" type="text" name="" id="name">
        <input 
          class="input"
          type="tel" 
          name="phone" 
          id="phone" 
          required="required" 
          data-phonemask="+375|__ ___-__-__"
          value="Телефон"
          pattern="\\+375\\s?[\\|][{0,1}9[0-9]{2}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2}"
          placeholder="+375|__ ___-__-__"
          >
        <button class="action-button gold" type="submit">
          Заказать консультацию
        </button>
      </form>
    </div>
  </div>  `,
  render() {
    return simpleTag({ classTag: 'fone-form-simple' }, this.modalTemplate);
  },
};

export default foneModal;
