let arr = document.getElementsByClassName('coral3-Button--secondary');
arr = [...arr];
let addButton;

arr.map((element) =>
  element.children[0].innerText === 'Add' ? (addButton = element) : ''
);

addButton.click();
await new Promise((resolve) => setTimeout(resolve, 1000));

let options = document.getElementsByClassName('coral-SelectList')[3].children;

options = [...options];
optionsName = [];
options.map((optName) => {
  optionsName.push(optName.innerText);
});
console.log(optionsName);

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
      console.log(clickItem.innerText);
      if (count == input.length) {
        console.log(
          '%cDONE !!!',
          'color:green; font-family:monospace; font-size: 20px'
        );
        document.getElementsByClassName('cq-dialog-submit')[0].click();
      }
    }, 500 * index);
  });
};

await new Promise((resolve) => {
  optionsName.map((item, index) => {
    setTimeout(() => {
      if (optionsName.length !== index + 1) {
        console.log(`${optionsName.length}/${index + 1}`);
        addButton.click();
      } else {
        console.log(
          `%c ${optionsName.length}/${index + 1} \n\n Feild Sellecting ...`,
          'color:green; font-family:monospace; font-size: 20px'
        );
        selectAllField();
      }
    }, 1000 * index);
  });
});
