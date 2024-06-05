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

async function trackUserHandler() {
	// let positionData;
	let posData;
	let timerData;
	try {
		const posData = await getPosition();
		const timerData = await setTimer(2000);
	} catch (error) {
		console.log(error);
	}
	console.log(timerData, posData);
	// 그리고 다음 줄이 실행
	// .then((posData) => {
	// 	positionData = posData;
	// 	return setTimer(2000);
	// })
	// 	.catch((err) => {
	// 		// 프로미스 체인에서 발생한 오류를 잡아내어 처리함
	// 		console.log(err);
	// 		return 'on we go...';
	// 	})
	// 	// catch 블록에서 반환된 값은 다음 then 블록으로 전달
	// 	// 체인을 중단하지 않고 계속 이어나갈 수 있음
	// 	// 완전히 멈추고 싶다면 catch를 끝으로 옮겨서 강제로 멈출 수 있음
	// 	.then((data) => {
	// 		console.log(data, positionData);
	// 	});
	// setTimer(1000).then(() => {
	// 	console.log('Timer done!');
	// });
	// console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// async는 함수 안에서만 사용할 수 있음
// async는 실행 방식을 바꾸는 것이 아니라 코드를 내부적으로 반환함
