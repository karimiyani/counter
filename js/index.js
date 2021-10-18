const increaseBtn = document.querySelector (".increase");
const resetBtn = document.querySelector (".reset");
const minusBtn = document.querySelector (".minus");
const counterValue = document.querySelector (" div span");


let count = 0;

increaseBtn.addEventListener("click", () => {
    count++ ;
    // console.log(typeof count); //count is object
    counterValue.textContent = count;
});
minusBtn.addEventListener("click", () => {
    count-- ;
    counterValue.textContent = count;

});
resetBtn.addEventListener("click", () => {
    count = 0 ;
    counterValue.textContent = count;

});