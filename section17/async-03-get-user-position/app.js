const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
	// 사용자의 위치를 가져오기
	navigator.geolocation.getCurrentPosition(
		(posData) => {
			console.log(posData); // 두번째 실행
		},
		(error) => {
			console.log(error); // 세번째 실행
		}

		// 여기 콜백함수 안에 있는 함수는 아래에 있는 console.log 보다 먼저 실행이 되지 못한다.
	);
	console.log('Getting position...'); // 첫번째 실행행
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// message queue로 보내서 event loop가 최종적으로 이를 JS 호출 stack으로 전송하도록 push한다.

// 1. navigater 함수가 브라우저에서 offload 처리되고 나면 브라우저는 이 함수를 메세지 queue에서 없앰
// 2. 이벤트루프로 돌아서 현재 자바스크립트 실행이 일어나지 않도록 함
// 3. console.log('Getting position...'); 가 브라우저로 전달된 후에 즉시 실행됨
// 4.
