// TODO 메뉴 추가
// - [ ] 메뉴의 이름을 입력받고 확인 버튼 또는 엔터키 입력으로 추가한다.
// - 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [ ] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다.

function App() {
  // 엔터를 쳤을 때 form 태그가 자동 전송되는것을 막아준다
  document
    .querySelector("#espresso-menu-form")
    .addEventListener("submit", e => {
      e.preventDefault()
    })
  // 메뉴의 이름을 입력받기
  document
    .querySelector("#espresso-menu-name")
    .addEventListener("keypress", e => {
      // 이벤트의 키가 엔터키라면
      if (e.key === 'Enter') {
        console.log(e.key)
        console.log(document.querySelector("#espresso-menu-name").value)
      }
    })
}

App()
// TODO 메뉴 수정
// - [ ] 메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
// - [ ] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다.

// TODO 메뉴 삭제
// - [ ] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
// - [ ] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
