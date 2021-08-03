const oneguest = document.querySelector("#oneguest");
const twoguest = document.querySelector("#twoguest");


const buttonsArr = document.querySelectorAll('.guest');

const getFocus = () => {
    button.addEventListener('click', () => {
        let isFocused = (document.activeElement === twoguest);
        console.log(isFocused);
    });
}
