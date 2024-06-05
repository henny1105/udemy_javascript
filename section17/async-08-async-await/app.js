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

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// 프로미스와 async/await 비교:

// 선호에 따라 선택: then과 catch를 사용하거나 async/await를 사용할 수 있으며, 이는 개인의 선호에 따라 선택하면 됩니다.
// async/await의 장점: 최신 브라우저에서 성능 면에서 약간 더 나을 수 있으며, 코드가 더 짧아질 수 있습니다. 하지만 모든 경우에 해당되는 것은 아닙니다.

// 내부 동작 이해:

// async/await의 작동 방식: async/await는 자바스크립트가 코드를 순차적으로 실행하는 것처럼 보이게 하지만, 내부적으로는 여전히 비동기적으로 동작합니다.
// await는 일시 중지가 아님: await는 코드 실행을 일시 중지하는 것이 아니라, 내부적으로 then 블록으로 감싸서 처리합니다.

// 제한 사항:

// 동시 작업 실행 불가: async/await는 동일한 함수 내에서 동시에 작업을 실행할 수 없습니다. 순차적으로 실행되기 때문에, 병렬 실행이 필요할 때는 적합하지 않습니다.
// 함수 밖에서 사용 불가: await는 async로 표시된 함수 내에서만 사용할 수 있습니다. 함수 밖에서는 사용할 수 없기 때문에, 이를 해결하기 위해서는 IIFE(즉시 실행 함수 표현)를 사용해야 합니다.
