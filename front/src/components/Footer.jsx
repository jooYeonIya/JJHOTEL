import '../css/Footer.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <hr />
        <div className="logo">
          <img src="https://jjhotel.s3.ap-northeast-2.amazonaws.com/images/logo.png" alt="logo" width="20px" height="20px" />
          <p>JJ HOTEL</p>
        </div>
        <div>
          <p>경기도 성남시 분당구 성남대로 34</p>
          <p>031-606-9311</p>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Footer