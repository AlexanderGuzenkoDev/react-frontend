import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

function Form(props) {
    const { background, maxWidth, minWidth } = props;
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');

    let style = {}

    if(background) {
        style.background = `url(${background})`;
        style.backgroundPosition = 'center';
        style.backgroundSize = 'cover';
    } else {
        style.background = '#343a40d0';
    }

    if(maxWidth) style.maxWidth = `${maxWidth}px`;
    if(minWidth) style.minWidth = `${minWidth}px`;

    const onSubmit = () => {
        const data = new FormData();

        data.append('name', name);
        data.append('email', email);
        data.append('phone', phone);
        data.append('message', message);

        axios
            .post('http://solanoglass.com/sendEmail.php', data)
            .then(res => {
                if(res.data === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your email was sent successfully'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong. Try again!'
                    })
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div style={style} className="rounded-lg">
                <div className="container text-white py-4">
                    <h5>HOW MAY WE HELP YOU?</h5>
                    <p><small>Schedule an appointment today.</small></p>
                    <div className="form-group">
                        <input type="text" placeholder="Name (Required)" name="name" id="name" className="form-control" style={{fontSize: '12px'}} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email (Required)" name="email" id="email" className="form-control" style={{fontSize: '12px'}}  onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Phone (Required)" name="phone" id="phone" className="form-control" style={{fontSize: '12px'}} onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="message" rows="4" className="form-control" placeholder="Message (Required)" style={{fontSize: '12px'}} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                        <button className="btn btn-block btn-success mt-2" style={{fontSize: '12px'}} onClick={e => onSubmit()}>SEND YOUR MESSAGE</button>
                    </div>
                </div>
        </div>
    )
}

export default Form