let arr = document.getElementsByClassName('coral3-Button--secondary');
arr = [...arr];
let addButton;

arr.map((element) =>
  element.children[0].innerText === 'Add' ? (addButton = element) : ''
);

addButton.click();
let getAllButtons = () => {
  let options = document.getElementsByClassName('coral-SelectList')[3].children;

  options = [...options];
  optionsName = [];
  options.map((optName) => {
    optionsName.push(optName.innerText);
  });
  console.log(optionsName);

  optionsName.map((item, index) => {
    console.log(optionsName.length - 1, index);
    optionsName.length - 1 != index
      ? setTimeout(() => {
          addButton.click();
        }, 1000 * index)
      : 0;
  });
};

let selectAllField = () => {
  let buttons = document.getElementsByClassName('coral-Select-button');

  let input = [...buttons];
  input.shift();
  input.shift();
  let count = 0;
  console.log(input.length);
  input.map((button, index) => {
    setTimeout(() => {
      count = count + 1;

      button.click();

      let clickItem =
        document.getElementsByClassName('is-visible')[1].children[count - 1];
      clickItem.click();

      count != input.length
        ? console.log(clickItem.innerText)
        : console.log(
            '%cDONE !!!',
            'color:green; font-family:monospace; font-size: 20px'
          );
    }, 500 * index);
  });
};

let s1 = () => getAllButtons();
let s2 = () => selectAllField();
