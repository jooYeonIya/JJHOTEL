import "../css/TitleLabel.css"

export default function TitleLabel({ title, subTitle }) {
    return (
        <>
            <br />
            <div id="title">{title}</div>
            <div id="subTitle">
                {subTitle.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}</div>
        </>
    )
}

