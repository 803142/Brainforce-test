import { simpleTag } from '../../helper';

const phoneModal = {
  modalTemplate: `<div class="modal-owerlay" data-click="closedContactFormModal">
    <div class="modal-window" data-click="preventClosedContactFormModal">
      <form action="">
        <div class="introduction">
          Заполните форму и закажите бесплатную консультацию
        </div> 
        <input 
          class="input"
          type="text" 
          name="" 
          id="name"
          placeholder="Имя"
          >
        <input 
          class="input"
          type="tel" 
          name="phone" 
          id="phone" 
          required="required" 
          data-keydown="typeContactFormModal"
          data-click="clickedContactFormModal"
          data-focusin="focusinContactFormModal"
          data-focusout="focusoutContactFormModal"
          value="Телефон"
          pattern="\\+375\\s?[{0,1}9[0-9]{2}\\s?\\d{3}[-]{0,1}\\d{2}[-]{0,1}\\d{2}"
          placeholder="+375 __ ___-__-__"
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

export default phoneModal;
