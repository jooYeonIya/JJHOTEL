import ReservaionInputContainer from "./ReservaionInputContainer";

export default function MainImageContainder() {
    return (
        <>
            <div className="mainImageContainder">
                <img src={"src/images/hotel_main.jpg"} alt="home_main" />
                <div className="reservationInputContainer">
                    <ReservaionInputContainer />
                </div>
            </div>
        </>
    )
}