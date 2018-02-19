import CompostMixin from '../../../node_modules/@lamplightdev/compost/src/compost-mixin.js';
import './characters.js';

class SplitString extends CompostMixin(HTMLElement) {
  static get properties() {
    return {
      value: {
        type: String,
        value: '',
        observer: 'observeValue',
        reflectToAttribute: true,
      },
    };
  }

  render() {
    return `
    <style>
      :host {
        display: block;
        --colour: steelblue;
      }

      x-characters {
        margin-top: 1rem;
      }

      x-characters div {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-bottom: 2rem;
      }

      x-characters div .number,
      x-characters div .character {
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid var(--colour);
        height: 1.5rem;
        width: 3rem;
      }

      x-characters div:last-child .number,
      x-characters div:last-child .character {
        border-right: 0;
      }

      x-characters div .number {
        color: var(--colour);
        border-bottom: 1px solid var(--colour);
      }

      x-characters div .character {
        height: 2rem;
      }
    </style>

    <h1>SplitString</h1>

    <input id="text" type="text" value="" on-change="update">
    <x-characters id="characters"></x-characters>
    `;
  }

  observeValue(oldValue, newValue) {
    this.$id.text.value = newValue;

    this.$id.characters.items = newValue.trim().split('');
  }

  update(event) {
    this.value = event.target.value.trim();
  }
}

customElements.define('x-splitstring', SplitString);
