import "../css/About.css";
import { useState, useEffect } from "react";
import HeaderWhite from '../components/HeaderWhite'
import Kakao from '../components/Kakao';

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const onScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <HeaderWhite />
      <div className="about">
        {scrollPosition ? (
          <Kakao />
        ) : (
          <div className="text">
            <h1>
              <b>JJ HOTEL</b>에서 동남아의 낙원을 경험하세요
            </h1>
            <br />
            <p>
              아름다운 열대 정원 속에 자리한 진주호텔은 동남아풍의 독특한 매력을 지닌 휴양지입니다. <br />
              다양한 수영장이 준비되어 있어 가족, 친구와 함께하는 완벽한 여유를 만끽할 수 있습니다. <br />
              편안하고 고급스러운 객실에서의 휴식은 물론, <br />
              맛있는 현지 음식과 다양한 레크리에이션 시설이 여러분을 기다립니다. <br />
              잊지 못할 추억을 만들고 싶다면 진주호텔로 오세요!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
