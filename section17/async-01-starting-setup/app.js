const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
	console.log('Clicked!'); // 클릭이 일어날 때마다 이 함수가 실행된다.
}

button.addEventListener('click', trackUserHandler);

// 브라우저는 스크립트 실행으로 돌아가서 클릭이 일어났을 때
// 이 함수를 실행하게 된다.
// ** 실행하는 모든 코드가 바로 실행이 되고 해당 작업이 끝날 때까지 스크립트의 다른 실행이 모두 차단됨

// 이 때 시간이 더 오래 소요되는 task가 메인 스레드의 작업을 차단하지 않도록 지원하는 것이 브라우저다.
