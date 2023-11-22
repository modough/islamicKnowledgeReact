import { useState } from 'react';
import './chatbot.css';
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png';
import user from '../../assets/user.jpg';
import { handleChatbotSubmit, handleCloseThread } from '../../data/fetchApi';

const Chatbot = ({ setShow }) => {
    const [data, setData] = useState()
    const [question, setQuestion] = useState('');
    const [threadId, setThreadId] = useState(null);


    const handleQuestion = (e) => {
        setQuestion(e.target.value);

    };
    return (
        <section className="chatbot">
            <p className='title'>
                Hello, I&apos;m your teacher bot, let us start today&lsquo;s lesson
            </p>
            <div className='chatDiv'>
                {data && data.map((elmt) => {
                    const { content, role, id } = elmt;
                    if (role === 'user') return (
                        <div key={id} className='questionDiv'>
                            <img
                                width={30}
                                className='questionLogo'
                                src={user}
                                alt="chatbot image"
                            />
                            <p className='question'>{content[0]?.text?.value}</p>
                        </div>
                    )
                    if (role === 'assistant') {
                        return (
                            <div key={id} className='answerDiv'>
                                <img
                                    width={20}
                                    className='answerLogo'
                                    src={logo}
                                    alt="chatbot image"
                                />
                                <p className='answer'>{content[0]?.text?.value}</p>
                            </div>
                        )
                    }
                }).reverse()}
            </div>
            <div className='bottom'>
                <form
                    onSubmit={(e) => {
                        handleChatbotSubmit(
                            e,
                            question,
                            threadId,
                            setData,
                            setThreadId,
                            setQuestion
                        )
                    }}
                    className='question-input'
                >
                    <input
                        type="text"
                        value={question}
                        onChange={handleQuestion}
                    />
                    <button
                        type="button"
                        onClick={(e) => {
                            handleChatbotSubmit(
                                e,
                                question,
                                threadId,
                                setData,
                                setThreadId,
                                setQuestion
                            )
                        }}
                    >Enter
                    </button>
                </form>
                <button
                    type='button'
                    onClick={() => {
                        handleCloseThread(
                            threadId,
                            setThreadId

                        )
                        setShow(false)
                    }

                    }
                >Close
                </button>
            </div>
        </section>
    )
}
Chatbot.propTypes = {
    setShow: PropTypes.func,
}
export default Chatbot