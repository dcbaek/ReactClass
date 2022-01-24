import './App.css';
import React, {useRef, useState} from 'react';
function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '돼지 목살', '소 갈비살']);

  let [date, changeDate] = useState(['1월24일', '1월25일', '1월26일', '1월27일']);

  let [likeCount, changelikeCount] = useState(0);

  // function changeTitle() {
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경(newArray);
  // }

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=> {changelikeCount(likeCount + 1)} }>👍</span> {likeCount} </h3>
        <p> {date[0]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p> {date[1]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p> {date[2]} </p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[3]} </h3>
        <p> {date[3]} </p>
        <hr/>
      </div>

      <Modal></Modal>
      
    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
    <h2> 제목 </h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
