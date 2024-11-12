import "../css/CustomButton.css"

export default function CustomButton({ title, onClicked }) {
    return (
        <>
            <button className="customButton" onClick={onClicked}>{title}</button>
        </>
    )
}