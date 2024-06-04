const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
	navigator.geolocation.getCurrentPosition(
		// 콜백함수 안에 콜백함수가 들어감
		(posData) => {
			setTimeout(() => {
				console.log(posData);
			}, 2000); // navigator.geolocation.getCurrentPosition() 함수가 실행되고 2초 후에 실행됨
		},
		(error) => {
			console.log(error);
		}
	);
	setTimeout(() => {
		console.log('Timer done!');
	}, 0); // 콜백함수가 실행되는 최소 시간이지 보장된 시간이 아님
	console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
