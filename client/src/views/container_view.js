const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.bindEvents = function() {
  this.element.addEventListener('submit', function(evt) {
    evt.preventDefault();
  });
  PubSub.subscribe('Cigarettes:data-ready', (evt) => {
    const items = evt.detail;
    this.createSmokedButton();
    // console.log(evt.detail);
    this.renderContainer(items);
  });
};

ContainerView.prototype.createSmokedButton = function () {
  const smokeButton = document.createElement('button');
  smokeButton.classList.add('smoked-button');
  smokeButton.textContent = "I smoked";
  this.element.appendChild(smokeButton)
  return smokeButton;
};



ContainerView.prototype.renderContainer = function (items) {
  // this.element.innerHTML = '';
  items.forEach((item) => {
    // debugger;
    const itemView = new ItemView(this.element, item);
    itemView.render();
  })
};


module.exports = ContainerView;
