// 진행바의 길이를 업데이트하는 함수
function updateProgressBar() {
	var progressBar = document.getElementById('progress-bar');
	var maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
	var currentScrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	var scrollPercentage = (currentScrollHeight / maxScrollHeight) * 100;
  
	progressBar.style.width = scrollPercentage + '%';
  }
  
  window.addEventListener('scroll', updateProgressBar);

  // 부드러운 스크롤
// 페이지가 완전히 로드된 후 실행되도록 이벤트 리스너를 등록
window.addEventListener('load', function() {
	// 메뉴 바의 링크 요소들을 선택
	var menuLinks = document.querySelectorAll('.menu-bar a');
  
	// 각 링크 요소에 대해 클릭 이벤트를 등록
	menuLinks.forEach(function(link) {
	  link.addEventListener('click', function(event) {
		event.preventDefault(); // 기본 클릭 동작 막음
  
		var targetId = this.getAttribute('href'); // 클릭된 링크의 href 속성 값을 가져옴
		var targetElement = document.querySelector(targetId); // 해당 섹션 요소를 선택
  
		// 스크롤 애니메이션을 부드럽게 처리하기 위해 window.scrollTo() 대신에 아래 코드를 사용
		targetElement.scrollIntoView({ behavior: 'smooth' });
	  });
	});
  });
  
// CAT 이미지에 마우스를 올렸을 때 스타일 변경
const catImages = document.querySelectorAll('#CAT img');
catImages.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.7)';
    image.style.webkitTransform = 'scale(1.7)'; // 크롬 브라우저 지원
    image.style.zIndex = '1';
    image.style.alignItems = 'center';
  });
//마우스 내렸을 때 변경
  image.addEventListener('mouseleave', () => {
    image.style.transform = '';
    image.style.webkitTransform = ''; // 크롬 브라우저 지원
    image.style.zIndex = '';
    image.style.alignItems = '';
  });
});

// TRAVEL 이미지에 마우스를 올렸을 때 스타일 변경
const travelImages = document.querySelectorAll('#TRAVEL img');
travelImages.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.7)';
    image.style.webkitTransform = 'scale(1.7)'; // 크롬 브라우저 지원
    image.style.zIndex = '1';
    image.style.alignItems = 'center';
  });
//마우스를 내렸을때 변경
  image.addEventListener('mouseleave', () => {
    image.style.transform = '';
    image.style.webkitTransform = ''; // 크롬 브라우저 지원
    image.style.zIndex = '';
    image.style.alignItems = '';
  });
});

//글씨 클릭 시 스타일 변경
const h3Elements = document.querySelectorAll('.index h3');

h3Elements.forEach(h3 => {
  h3.addEventListener('mouseover', () => {
    h3.classList.add('hovered');
  });

  h3.addEventListener('mouseout', () => {
    h3.classList.remove('hovered');
  });
});


// 상단으로 스크롤하는 함수
document.addEventListener('DOMContentLoaded', function() {
	function scrollToTop() {
	  window.scrollTo({ top: 0, behavior: 'smooth' });
	}
  
	const scrollToTopButton = document.getElementById('scrollToTopButton');
	scrollToTopButton.addEventListener('click', scrollToTop);
  });

//오늘 날짜 출력
//순수함수
function formatDate(date) { 
	const options = {
	  year: 'numeric',
	  month: 'long',
	  day: 'numeric',
	};
	return date.toLocaleDateString(undefined, options);
  }
  
  function updateDateElement(dateElement) {
	const today = new Date();
	const formattedDate = formatDate(today);
	const updatedText = "☁︎ TODAY " + formattedDate + " ☁︎";
	dateElement.textContent = updatedText;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
	const dateElement = document.getElementById('date');
	updateDateElement(dateElement);
  });

  //문자열의 길이를 반환
  //순수함수
function getElementTextLength(elementId) {
  const element = document.getElementById(elementId);
  if (element && element.innerText) {
    return element.innerText.length;
  }
  return 0;
}

const elementId = "element";
const length = getElementTextLength(elementId);
console.log('문자열의 길이는 ' + length + '입니다.'); //콘솔에 출력

  //현재 시간 출력
  function getCurrentTime(currentTime) {
    return currentTime.toLocaleTimeString();
  }
  
  const currentTime = new Date();
  console.log('현재 시간은 ' + getCurrentTime(currentTime) + '입니다.');//콘솔에 출력

  //더하기 값 출력
  //순수함수
  function addNumbers(a, b) {
    return a + b;
  }
  
  const result = addNumbers(3, 5);
  console.log('더하기 결과:', result); //콘솔에 출력


// 버튼 누르면 인삿말 출력 - jQuery
// 문서가 로드될 때 실행
$(document).ready(function() {
  // 버튼 클릭 이벤트
  $("#myButton").click(function() {
    alert("오늘도 좋은 하루 되세요 🍀");
  });
});