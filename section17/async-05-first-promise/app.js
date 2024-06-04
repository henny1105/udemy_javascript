const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		// 프로미스가 생성될 때 바로 실행됨
		setTimeout(() => {
			resolve('Done!');
		}, duration); // 이 프로미스 객체를 내부적으로 해결됐다고 표시하는 함수
	});
	return promise; // 생성된 프로미스를 반환
};

function trackUserHandler() {
	navigator.geolocation.getCurrentPosition(
		(posData) => {
			// 위치 정보를 성공적으로 가져온 경우
			setTimer(2000).then((data) => {
				console.log(data, posData); // 세번째 코드 실행
			});
		},
		(error) => {
			// 위치 정보를 가져오는데 실패한 경우
			console.log(error);
		}
	);
	setTimer(1000).then(() => {
		console.log('Timer done!'); // 두번째 코드 실행
	});
	console.log('Getting position...'); // 첫번째 코드 실행
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
