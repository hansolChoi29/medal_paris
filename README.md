## PROJECT: 2024 PARIS OLYMPICS

![title](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fnex0N%2FbtsKserEsZb%2FLLVX5vU6iAx6NkVyZtC3a0%2Fimg.png)

처음으로 배워 본 React로 Olympic Medal Tracker를 만들어 보았습니다. 이 웹은 국가명을 추가하여 메달을 집계할 수 있는 브라우저입니다. 메달은 금메달, 은메달, 동메달로 구성하여 99이하까지만 입력이 가능하며, 수정 시 국가와 추가된 메달의 개수만 입력하여 업데이트가 가능합니다. <br>
리액트 컴포넌트, 이벤트 관리, 상태(state) 관리를 통해 CRUD 기능을 구현해보았습니다.<br>

## PROJECT 목표

- 리액트 컴포넌트와 훅(useState)을 다룰 수 있어요.
- 리액트에서 이벤트를 관리할 수 있어요.
- 리액트의 state, props 를 확실히 이해하고 사용할 수 있어요

## PROJECT 구조

![title](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzoi3Y%2FbtsKr71y3B6%2FGrmYAD2kQFrlp65Tlznrs0%2Fimg.png)

## PROJECT 팀원소개

| 이름   | MBTI |
| ------ | ---- |
| 최한솔 | ENTJ |

## PROJECT 기능

- 국가 추가하기, onSubmit <br>
  제출 버튼 클릭 시 데이터를 추가할 수 있도록 onSubmit 이벤트 핸들러를 설정하고, 기본 상태를 관리할 useState 훅을 사용해 초기 상태를 설정하였습니다. onSubmit 을 사용하기 위해서 Input 들은 Form 안에 위치시켰습니다. 그리고 국가 리스트 데이터를 저장할 useState를 추가하고, map 메서드를 사용해 리스트에 데이터를 반복 출력하게 만들었습니다. <br>

![title](https://blog.kakaocdn.net/dn/bj4lrS/btsKqNoJURf/AkqjSykq2QHFJgHcIhS2Y0/img.gif)

- 내림차순으로 국가 추가하기<br>

금메달 수를 기준으로 내림차순 정렬하여 상위 국가부터 표시되도록하였으며 리스트에 표시된 국가별 메달 집계를 확인할 수 있도록 UI에 반영하였습니다.<br>

![title](https://blog.kakaocdn.net/dn/lJGAf/btsKsdzxI0z/UrLLth9kgQ4xZJjhkTlv71/img.gif)

- Update<br>
  삼항연산자를 이용하여 기존 국가명과 input한 국가명이 같으면 합산되어 렌더링할 수 있게 만들었습니다.<br>

![title](https://blog.kakaocdn.net/dn/c8oWpA/btsKp6ieobY/FHpriwkXokPn1oIBfcM4X1/img.gif)

- HandleDelete<br>
  filter 메서드를 활용하여 선택된 국가를 제외하고 나머지 국가들로 리스트를 재구성하였습니다.<br>

![title](https://blog.kakaocdn.net/dn/bXIBOu/btsKqySWDxc/NjrTbI3mMsLCbJRpZ3Gns1/img.gif)

- 100이상이면 거절하기<br>

조건문을 이용하여 100이상이면 경고창이 뜨게 만들었습니다.
return하여 집계가 되지않습니다.<br>

![title](https://blog.kakaocdn.net/dn/df58wq/btsKqWMFwwE/kS6lCQHPhAvm2BwB7DvYxK/img.gif)

- 존재하지 않는 국가면 업데이트 불가능하게 하기<br>

업데이트 버튼을 누르면 기존국가명과 비교하여 존재하지않으면 경고창을 보일 수 있도록 하였습니다. return하여 집계가 되지않습니다.<br>

![title](https://blog.kakaocdn.net/dn/xEksh/btsKracKIQp/GASgmKwoC9fCWyxUrEYa4K/img.gif)
