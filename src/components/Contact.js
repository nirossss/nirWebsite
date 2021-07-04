import React, { useState } from 'react'
import "./Contact.css"

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [msgToUser, setMsgToUser] = useState({
        isMsg: false,
        msg: '',
        color: 'red'
    })

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        setMsgToUser({
            isMsg: false,
            msg: '',
            color: 'red'
        })

        let { success, checkMsg } = inputsCheck()

        if (success) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", name, email, message }),
            })
                .then(() => {
                    setMsgToUser({
                        isMsg: true,
                        msg: 'Message sent.\n Please E-mail me for faster contact: nirelen4@gmail.com',
                        color: 'green'
                    })
                })
                .catch((error) => {
                    setMsgToUser({
                        isMsg: true,
                        msg: ':( Faild To sent, Please send message  Manualy on E-mail: nirelen4@gmail.com',
                        color: 'red'
                    })
                    console.log(error);
                });
        } else if (!success) {
            setMsgToUser({
                isMsg: true,
                msg: checkMsg,
                color: 'red'
            })
        }
    }

    const inputsCheck = () => {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name.trim().length < 2) {
            return { success: false, checkMsg: 'Invalid Name' }
        }
        if (message.trim().length > 1000) {
            return { success: false, checkMsg: `Too many characters ${message.trim().length}/1000` }
        }
        if (!regexEmail.test(String(email).toLowerCase())) {
            return { success: false, checkMsg: 'Invalid Email' }
        }
        return { success: true, checkMsg: '' }
    }

    return (
        <section id="contact">
            <form
                netlify
                name="contact"
                onSubmit={handleSubmit}>
                <h4>Contact Me</h4>
                <div className="form-section">
                    <label htmlFor="name" >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="email" >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-section">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="input"
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength="1000"
                    />
                </div>
                {msgToUser.isMsg && <div style={{ color: msgToUser.color, borderColor: msgToUser.color }} className="msg-to-user">{msgToUser.msg}</div>}
                <button type="submit">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact