import { mark } from "regenerator-runtime";

class HeaderView {
  _data;
  _parentEl = document.querySelector(".heading-primary");

  renderHeader(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }
  _generateMarkup() {
    return `<span class="heading-primary--sub">${this._data.day}, ${this._data.mystery.myst}</span>`;
  }
}

export default new HeaderView();
