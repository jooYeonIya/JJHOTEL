import '../css/Facilities.css'
import { useState, useEffect } from 'react'
import HeaderWhite from '../components/HeaderWhite'

function Facilities() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const onScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="facilities_container">
      <HeaderWhite />
      <div className={scrollPosition ? "facilities_pool" : "facilities_dining"}>
        {scrollPosition ? 
        <div className="facilities_text" >
          <h1>Pool</h1>
          <br />
          <p>
            진주호텔의 수영장은 여러분의 휴식과 즐거움을 위해 설계된 완벽한 오아시스입니다. <br />
            다양한 크기와 스타일의 수영장이 마련되어 있어, 가족 단위의 방문객부터 커플, 친구들까지 모두가 즐길 수 있는 공간입니다. <br />
            청량한 물속에서의 수영은 물론, 수영장 주변의 편안한 일광욕 의자에서 여유로운 시간을 보내보세요. <br />
            석양이 질 무렵, 아름다운 풍경을 감상하며 칵테일 한 잔을 즐기는 것도 잊지 마세요. <br />
            진주호텔의 수영장에서 특별한 순간을 만들어보세요!
            </p>
        </div>  
        : 
        <div className="facilities_text">
          <h1>Dining</h1>
          <br />
          <p>
            진주호텔의 다이닝은 여러분을 맛의 세계로 초대합니다. <br />
            신선한 현지 재료로 만든 다양한 요리가 준비된 레스토랑에서 아침부터 저녁까지 특별한 식사를 즐겨보세요. <br />
            전통적인 동남아 요리부터 국제적인 메뉴까지, 모든 입맛을 만족시키는 다채로운 선택이 여러분을 기다립니다. <br />
            아름다운 수영장 뷰를 감상하며 여유로운 시간을 보낼 수 있는 야외 다이닝 공간도 마련되어 있습니다. <br />
            진주호텔에서의 순간을 더욱 특별하게 만들어 보세요!
          </p>
        </div> 
        }
      </div>
    </div>
  )
}

export default Facilities