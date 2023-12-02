import { useState } from 'react';
import './chatbot.css';
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png';
import user from '../../assets/user.jpg';
import { handleChatbotSubmit, handleCloseThread } from '../../data/fetchApi';

const Chatbot = ({ setShow, show, setHideToast, hideToast, toast }) => {
    const [data, setData] = useState()
    const [question, setQuestion] = useState('');
    const [threadId, setThreadId] = useState(null);
    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };

    return (
        show ?
            <section className="chatbot">
                <div className='title'>
                    <img
                        className='answerLogo'
                        src={logo}
                        alt="chatbot image"
                    />
                    <span className='online'>Online</span>
                </div>
                <div className='chatDiv'>
                    <div className='answerDiv'>
                        <img

                            className='answerLogo'
                            src={logo}
                            alt="chatbot image"
                        />
                        <p className='answer'>
                            Hello, I&apos;m your teacher bot, let us start today&lsquo;s lesson
                        </p>
                    </div>
                    {data && data.map((elmt) => {
                        const { content, role, id } = elmt;
                        if (role === 'user') return (
                            <div key={id} className='questionDiv'>
                                <img
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
                                setThreadId,
                                setData
                            )
                            setShow(false)
                        }}
                    >Close
                    </button>
                </div>
            </section> :
            <div className='chatbot-button'>
                <img
                    width={50}
                    className='chat'
                    src={logo}
                    onClick={() => setShow(!show)}
                    onKeyDown={(e) => console.log(e.target.value)}
                    alt="chatbot image"
                />
                {!hideToast && <div className={`${toast ? 'chat-toast' : 'none'}`}>
                    <span className='toast-close' onClick={() => setHideToast(!hideToast)}>X</span>
                    <p>Hello, I&apos;m Your Assistant.<br></br> How may i help you ?</p>
                </div>}
            </div>

    )
}
Chatbot.propTypes = {
    setShow: PropTypes.func,
    show: PropTypes.bool,
    toast: PropTypes.bool,
    hideToast: PropTypes.bool,
    setHideToast: PropTypes.func,
}
export default Chatbot