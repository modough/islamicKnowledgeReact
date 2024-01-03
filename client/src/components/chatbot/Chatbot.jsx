import { useState } from 'react';
import './chatbot.css';
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png';
import user from '../../assets/user.jpg';
import close from '../../assets/Close.svg';
import { handleChatbotSubmit, handleCloseThread } from '../../data/fetchApi';

const Chatbot = ({ setShow, show, setHideToast, hideToast, toast }) => {
    const [data, setData] = useState()
    const [question, setQuestion] = useState('');
    const [threadId, setThreadId] = useState(null);
    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };

    return (

        <>
            {show &&
                <section className="chatbot">
                    <div className='title'>
                        <div className='title-left'>
                            <img
                                className='answerLogo'
                                src={logo}
                                alt="logo"
                            />
                            <span className='online'>Online</span>
                        </div>
                    </div>
                    <div className='chatDiv'>
                        <div className='answerDiv'>
                            <img
                                className='answerLogo'
                                src={logo}
                                alt="chatbot logo"
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
                                        alt="user"
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
                                            alt="chatbot logo"
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
                    </div>
                </section>}
            <div className='bg-blur'>

            </div>
            <div className='chatbot-button'>
                {!show && <img
                    width={50}
                    className='chat'
                    src={logo}
                    onClick={() => {

                        setShow(!show)
                        setHideToast(true)
                    }}
                    onKeyDown={(e) => console.log(e.target.value)}
                    alt="chatbot logo"
                    role="button"
                />}
                {show && <img
                    width={50}
                    height={50}
                    className='chat'
                    src={close}
                    onClick={() => {
                        handleCloseThread(
                            threadId,
                            setThreadId,
                            setData
                        )
                        setShow(!show)
                    }}
                    onKeyDown={(e) => console.log(e.target.value)}
                    alt="chatbot logo"
                    role="button"
                />}
                {!hideToast &&
                    <div className={`${toast ? 'chat-toast' : 'none'}`}>
                        <span className='toast-close' onClick={() => setHideToast(!hideToast)}>X</span>
                        <p>Hello, I&apos;m Your Assistant.<br></br> How may i help you ?</p>
                    </div>}
            </div>
        </>
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