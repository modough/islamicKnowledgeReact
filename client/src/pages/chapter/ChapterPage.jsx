import '../books/book.css';
import { useParams } from 'react-router-dom';
import { fetchDb } from '../../data/fetchJson';

const ChapterPage = () => {
    const { name, id } = useParams()
    console.log(name, id)

    const data = fetchDb(name)
    console.log(data)


    return (
        <section className='chapterPage' >
            hello
        </section >
    )


};

export default ChapterPage;