

import '../books/book.css';
import { useParams } from 'react-router-dom';

const Chapter = () => {
    const { name, id } = useParams()
    console.log(name, id)


    return (

        <section className='component' >
            hello
        </section >
    )


};

export default Chapter;