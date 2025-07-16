
const containOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containOnlyDigits("12345"));
console.log(containOnlyDigits("1234sdfg5"));



const logEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
};

logEverySecond();



const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
};

count();


const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('click', () => {
    colorBox.classList.toggle('active');
});


const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.responseType = 'json';

xhr.onload = () => {
    if (xhr.status === 200) {
        console.log('данные из data.json:', xhr.response);

    } else {
        console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
};

xhr.onerror = () => {
    console.error('ошибка');
};

xhr.send();
