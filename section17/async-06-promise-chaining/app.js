const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(success) => {
				resolve(success);
			},
			(error) => {
				reject(error);
			},
			opts
		);
	});
	return promise;
};

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, duration);
	});
	return promise;
};

// 콜백 지옥에서 벗어나기 위해 프로미스 체이닝을 사용함
function trackUserHandler() {
	let positionData;
	getPosition() // 위치 정보를 불러옴
		.then((posData) => {
			// 성공하면 다음 작업을 수행
			positionData = posData; // 위치 정보를 저장
			return setTimer(2000); // 2초 뒤에 다음 작업을 수행
			// return setTimer(2000
			// setTimer(2000).then((data) => {
			// 	console.log(posData);
			// });
		})
		.then((data) => {
			console.log(data, positionData);
		});
	setTimer(1000).then(() => {
		console.log('Timer done!'); // 1초 뒤에 콘솔에 출력
	});
	console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// 주석 처리된 코드 블록은 계산 작업을 수행하고 결과를 출력합니다.
// 이는 위치 추적 기능과 직접적으로 관련이 없기 때문에 주석 처리된 상태로 두겠습니다.
// let result = 0;

// for (let i = 0; i < 100000000; i++) {
// 	result += i;
// }

// console.log(result);

// 1. console.log('Getting position...');  // 즉시 실행
// 2. setTimer(1000) 설정  // 1초 후 "Timer done!" 출력
// 3. getPosition() 실행  // 위치 정보 가져오기 시작
// 4. 1초 후: "Timer done!" 출력
// 5. 위치 정보 가져오기 완료
// 6. setTimer(2000) 설정  // 2초 후 "Done!"와 위치 정보 출력
// 7. 2초 후: "Done!"와 위치 정보 출력
