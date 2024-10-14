export default function CustomButton({ title, onClicked }) {
    return (
        <>
            <button onClick={onClicked}>{title}</button>
        </>
    )
}