import "./chapterTitle.css";
import PropTypes from 'prop-types'

const ChapterTitle = ({ data }) => {
    return (
        <div className='chapterTitle' >
            <p>{data.english}</p>
            <p>{data.arabic}</p>
        </div>
    )
}
ChapterTitle.propTypes = {
    data: PropTypes.object
}
export default ChapterTitle