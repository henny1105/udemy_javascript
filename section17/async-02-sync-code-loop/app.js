const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
	console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

let result = 0;

for (let i = 0; i < 100000000; i++) {
	result += i;
}

console.log(result);

// 이벤트 리스너가 있고 이를 브라우저로 전달해서 해당 이벤트 리스너가 자바스크립트를 차단하지 않도록 한다.

// result가 계산되는 동안 이벤트 리스너는 계속해서 실행된다.

//
