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
	let positionData;
	let posData;
	let timerData;
	try {
		posData = await getPosition();
		timerData = await setTimer(2000);
	} catch (error) {
		console.log(error);
	}
	console.log(timerData, posData);
	// getPosition()
	//   .then(posData => {
	//     positionData = posData;
	//     return setTimer(2000);
	//   })
	//   .catch(err => {
	//     console.log(err);
	//     return 'on we go...';
	//   })
	//   .then(data => {
	//     console.log(data, positionData);
	//   });
	setTimer(1000).then(() => {
		console.log('Timer done!');
	});
	console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// });

// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
//   console.log(promiseData);
// });

Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) => {
	console.log(promiseData);
});

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// Promise.race:

// 여러 프로미스 중 가장 빨리 완료된 프로미스의 결과를 사용합니다.
// 예: 1초 안에 위치 정보를 가져오지 못하면 타이머가 먼저 완료되어 다른 작업을 수행할 수 있습니다.

// Promise.all:

// 모든 프로미스가 성공적으로 완료되기를 기다립니다.
// 예: 위치 정보와 타이머가 모두 완료될 때까지 기다린 후 결과를 처리합니다.
// 단점: 하나라도 실패하면 전체가 실패로 간주됩니다.

// Promise.allSettled:

// 모든 프로미스가 완료될 때까지 기다리며, 각각의 성공 또는 실패 상태를 반환합니다.
// 예: 모든 프로미스가 완료된 후 각 프로미스의 결과를 처리합니다.
// 장점: 모든 프로미스가 완료될 때까지 기다리며, 성공과 실패 결과를 모두 반환합니다.
