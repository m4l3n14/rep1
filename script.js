const stor1 = document.getElementById('stor1');
const stor2 = document.getElementById('stor2');
const stor3 = document.getElementById('stor3');
const vich = document.getElementById('vich');
const ans = document.getElementById('ans');
const ochist = document.getElementById('ochist');

function proverka() {
    let a = Number(stor1.value);
    let b = Number(stor2.value);
    let c = Number(stor3.value);

    let a1 = isNaN(a); 
    let b1 = isNaN(b);
    let c1 = isNaN(c);

    if (a1 || b1 || c1 || stor1.value === '' || stor2.value === '' || stor3.value === ''){
        ans.textContent = 'Все стороны треугольниками должны быть числами. Исправьте ошибку и попробуйте еще раз'
    } else if(a <= 0 || b <= 0 || c <= 0) {
        ans.textContent = 'Все стороны треугольника должны быть больше 0. Исправьте ошибку и попробуйте еще раз'
    } else if (a + b <= c || a + c <= b || b + c <= a){
        ans.textContent = 'В треугольнке сумма 2-х сторон должна быть больше 3-ей стороны. Исправьте ошибку и попробуйте еще раз'
    } else if (a === b && b === c){
        ans.textContent = 'Это равносторонний треугольник'
    } else if(a === b || a === c || b === c){
        ans.innerText = 'Это равнобедренный треугльник'
    } else{
        ans.innerText = 'Это разносторонний треугольник'
    }
};

function ochistka(){
    stor1.value = ''
    stor2.value = ''
    stor3.value = ''
    ans.textContent = ''
};

ochist.addEventListener('click', ochistka);
vich.addEventListener('click', proverka)
