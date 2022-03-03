let btns = document.querySelectorAll('.btn');

const colors = ["tomato","teal","cyan","magenta","yellowgreen"];

function changeColor () {
    let index = 0;
    return function() {
        this.style.backgroundColor = colors[index];
        index++;
        if (click > 4){
            return 0;
        }
    }
}


for (const btn of btns) {
    btn.addEventListener('click', changeColor());
}

// btnFirst.addEventListener('click', () => btnFirst.style.backgroundColor ='#ff6347',"#008080")
// btnSecond.addEventListener('click', () => btnSecond.style.backgroundColor ='#ff6347')
// btnThree.addEventListener('click', () => btnThree.style.backgroundColor ='#ff6347')
