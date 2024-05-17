import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Links from '../Links';
import awsActions from '../../actions/AwsActions';

const defaultModal = {
    show: false
};

export const info = {
    fullName: "Van Ngoc Trau Nguyen",
    jobTitle: "Senior Software Developer",
    address: "Garland, TX 75042",
    phone: "(641) 557-0137",
    email: "traunguyen92@gmail.com",
};

const defaultState = {
    name: '',
    subject: '',
    email: '',
    content: '',
    phone: '',
};

function Contact() {
    const [message, setMessage] = useState(defaultState);
    const [modal, setModal] = useState(defaultModal);
    const [errorMessage, setErrorMessage] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { address, phone, email } = info;

    function handleChange(event) {
        const { id, value } = event.target;
        setMessage((values) => ({
            ...values,
            [id]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        if (message.phone && !isValidPhoneNumber(message.phone)) {
            setErrorMessage("Phone number is invalid!");
            setIsSubmitting(false);
            return;
        }

        awsActions.sendMessage(message)
            .then(() => {
                setMessage(defaultState);
                setErrorMessage();
                setModal({ show: true, content: "Thank you! I will contact you soon..." });
            })
            .catch(() => {
                setModal({ show: true, content: "Oops! Something went wrong. Can not send this message!" });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    function handleClose() {
        setModal(defaultModal);
    }

    function isValidPhoneNumber(phone) {
        return /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})(?:[ ]?(?:#|x)(\d+))?$/.test(phone);
    }

    function renderModal() {
        return (
            <Modal show={modal.show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modal.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                <div className="col-md-6">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">More about me</h5>
                                        </div>
                                        <div className='more-info'>
                                            <p>
                                                Please feel free to reach out me using my email or submit a message in the form.
                                            </p>
                                        </div>
                                        <div className="more-info">
                                            <ul className="list-ico">
                                                <li><span className="ion-ios-location"></span> {address}</li>
                                                <li><span className="ion-ios-telephone"></span>{phone}</li>
                                                <li><span className="ion-email"></span>{email}</li>
                                            </ul>
                                        </div>
                                        <Links/>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="title-box-2">
                                            <h5 className="title-left">Leave your message</h5>
                                        </div>
                                        <div>
                                            <form
                                                onSubmit={(e) => handleSubmit(e)}
                                                className="contactForm"
                                            >
                                                <div id="sendmessage">
                                                Thank you! Your message has been sent. I will contact you soon.
                                                </div>
                                                <div id="errormessage"></div>
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Your name(*)</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control"
                                                                id="name"
                                                                placeholder="Please enter your name"
                                                                data-rule="minlen:4"
                                                                data-msg="Please enter at least 4 characters"
                                                                required
                                                                value={message.name}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Your email(*)</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Please enter your email"
                                                                data-rule="email"
                                                                data-msg="Please enter a valid email"
                                                                required
                                                                value={message.email}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Your phone number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="phone"
                                                                id="phone"
                                                                placeholder="Please enter your phone number"
                                                                value={message.phone}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Your subject(*)</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Please enter subject"
                                                                data-rule="minlen:4"
                                                                data-msg="Please enter at least 8 characters"
                                                                required
                                                                value={message.subject}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <label>Your Message(*)</label>
                                                            <textarea
                                                                className="form-control"
                                                                name="content"
                                                                id="content"
                                                                rows="5"
                                                                data-rule="required"
                                                                data-msg="Please write something"
                                                                placeholder="Please enter your message"
                                                                required
                                                                value={message.content}
                                                                onChange={handleChange}
                                                            ></textarea>
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 submit-btn">
                                                    {errorMessage &&
                                                        <div className="error-message">{errorMessage}</div>}
                                                    <button
                                                        type="submit"
                                                        className="btn-shutter-out-horizontal"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                © 2024 Trau Nguyen
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {renderModal()}
        </section>
    );
}

export default Contact;
