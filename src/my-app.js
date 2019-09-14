import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-app')
export class MyApp extends LitElement {
  @property({ type: String }) message = 'Hello World!';

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}