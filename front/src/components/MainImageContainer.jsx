import ReservaionInputContainer from "./ReservaionInputContainer";

export default function MainImageContainder() {
    return (
        <>
            <div className="mainImageContainder">
                <img src={"https://jjhotel.s3.ap-northeast-2.amazonaws.com/images/home_main.jpg"} alt="home_main" />
                <div className="reservationInputContainer">
                    <ReservaionInputContainer />
                </div>
            </div>
        </>
    )
}