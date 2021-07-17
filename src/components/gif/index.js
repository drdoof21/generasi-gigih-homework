const Gif = ({url, title}) => {
    return (
        <div>
            <img
            src={url}
            alt={title}
            />
            <div>{title}</div>
        </div>
    )
}

export default Gif;