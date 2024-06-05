const listElement = document.querySelector('.posts');

const postTemplate = document.getElementById('single-post');

// 새로운 XMLHttpRequest 객체를 생성
const xhr = new XMLHttpRequest();

// GET 요청을 'https://jsonplaceholder.typicode.com/posts' URL로 초기화
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// 응답 유형을 JSON으로 설정
xhr.responseType = 'json';

// 요청이 성공적으로 완료되면 실행될 onload 이벤트 핸들러 설정
xhr.onload = function () {
	// const listOfPosts = JSON.parse(xhr.response);

	// 자동으로 JSON으로 파싱된 응답 데이터를 변수에 저장
	const listOfPosts = xhr.response;

	// 응답 데이터인 listOfPosts 배열을 반복하여 각 게시물 처리
	for (const post of listOfPosts) {
		// 템플릿 내용을 깊은 복사하여 새로운 postEl 요소 생성
		const postEl = document.importNode(postTemplate.content, true);

		postEl.querySelector('h2').textContent = post.title.toUpperCase();
		postEl.querySelector('p').textContent = post.body;
		listElement.append(postEl);
	}
};

// 구성된 요청을 서버로 전송
xhr.send();
