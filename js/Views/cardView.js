class CardView {
  _data;
  _backEl = document.querySelectorAll('.card__mystery-title');
  _frontElMyst = document.querySelectorAll('.mystery-name');

  renderCard(data) {
    this._data = data;

    this._frontElMyst.forEach(
      function (el) {
        el.innerHTML = '';
        el.insertAdjacentText('afterbegin', this._data.myst);
      }.bind(this)
    );

    this._backEl.forEach((_, i) => {
      document.querySelector(
        `.card__mystery-title--${i + 1}`
      ).innerHTML = this._data.mystName[i];
    });
  }
}

export default new CardView();
//front name

// .forEach(function (el) {
//     el.innerHTML = "";
//     el.insertAdjacentText("afterbegin", model.state.mystery.myst);
//   });

//back name

// document.querySelectorAll('.card__mystery-title').forEach((_, i) => {
//     document.querySelector(`.card__mystery-title--${i + 1}`).innerHTML =
//       model.state.mystery.mystName[i];
//   });
