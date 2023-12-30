import "./chapterTitle.css";

const ChapterTitle = ({ data }) => {
    return (
        <div className='chapterTitle' >
            <p>{data.english}</p>
            <p>{data.arabic}</p>
        </div>
    )
}

export default ChapterTitle