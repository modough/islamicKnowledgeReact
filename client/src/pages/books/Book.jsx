import { useEffect, useState } from 'react'

import './book.css';
import qudsi from '../../../public/qudsi.json';
import nawawi from '../../../public/nawawi.json';
import shahwaliullah from '../../../public/shahwaliullah.json';
import bulugh_almaram from '../../data/json/bulugh_almaram.json';
import riyad_assalihin from '../../data/json/riyad_assalihin.json';
import { Link, useParams } from 'react-router-dom';

const BookComponent = () => {
    const { name } = useParams()
    console.log(name)
    console.log('bulugh', bulugh_almaram)
    console.log('qudsi', qudsi)
    console.log('nawawi', nawawi)

    const fetchDb = () => {
        if (name === 'qudsi') {
            return qudsi
        }
        if (name === 'shahwaliullah') {
            return shahwaliullah
        }
        if (name === 'bulugh_almaram') {
            return bulugh_almaram
        }
        if (name === 'riyad_assalihin') { return riyad_assalihin }
        if (name === 'nawawi') { return nawawi }

    }
    const data = fetchDb()

    return (

        <section className='component' >
            <table>
                <tbody>
                    {data && data.hadiths.length <= 42 && data.hadiths.map((data) => (
                        <tr key={data.id}>
                            <td style={{ display: 'flex', flexDirection: 'column' }}>
                                <p>{data.english.narrator}</p>
                                <p>{data.english.text}</p>
                                <p>{data.arabic}</p>
                                <p>{data.id}</p>
                            </td>
                        </tr>
                    )
                    )}
                    {data && data.hadiths.length > 42 && data.chapters.map((data) => (
                        <Link key={data.id} to={`${data.id}`}>
                            <div style={{ display: 'flex', flexDirection: 'column' }} >
                                <p>{data.id}</p>
                                <p>{data.english}</p>
                                <p>{data.arabic}</p>
                            </div>
                        </Link>
                    )
                    )}
                </tbody>
            </table>
        </section >
    )


};

export default BookComponent;