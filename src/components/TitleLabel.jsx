import "../css/TitleLabel.css"

export default function TitleLabel({ title, subTitle }) {
    return (
        <>
            <br />
            <div id="title">{title}</div>
            <div id="subTitle">
                {subTitle.split("/").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}</div>
        </>
    )
}

