import CompostMixin from '../../../node_modules/@lamplightdev/compost/src/compost-mixin.js';
import CompostRepeatMixin from '../../../node_modules/@lamplightdev/compost/src/repeat-mixin.js';

class Characters extends CompostRepeatMixin(CompostMixin(HTMLElement)) {
  render() {
    return super.render(`
      <style>
        :host {
          display: block;
        }
      </style>
    `);
  }

  getTemplateString() {
    return `
      <div>
        <span class="number"></span>
        <span class="character"></span>
      </div>
    `;
  }

  getKey(value, index) {
    return index;
  }

  updateItem(el, value, index) {
    el.querySelector('.number').textContent = index + 1;
    el.querySelector('.character').textContent = value;
  }
}

customElements.define('x-characters', Characters);
