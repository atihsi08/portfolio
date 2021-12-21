import React, { useState } from 'react'
import { Button, Link, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useAlert } from 'react-alert';
import axios from 'axios';
import './contact.css';

const contactInfo = [
    {
        name: 'Email Address',
        content: 'ishitagarg1abc@gmail.com',
        icon: <MailOutlineIcon />
    },
    {
        name: 'Contact Number',
        content: '7888814528',
        icon: <PhoneAndroidIcon />
    }
]

const styles = {
    contactInfoTypography: {
        marginLeft: 5,
        display: 'flex',
        alignItems: 'center'
    },
    linkedInContact: {
        marginLeft: 5,
        display: 'flex',
        alignItems: 'center',
        color: '#F1FAEE'
    },
    messageHeading: {
        marginTop: 3,
        textAlign: 'center',
        fontFamily: 'Corinthia'
    }
}

function Contact() {

    const alert = useAlert();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-type": "application/json",
            }
        };
        const { data } = await axios.post('/send', form, config);

        if (data.status === 'success') {
            alert.success('Message sent successfully');
        }
        else if (data.status === 'fail') {
            alert.error('Failed to send Message');
        }
        setForm({
            name: '',
            email: '',
            message: '',
        });
    }

    const handleChange = (e) => {
        setForm(prevFormState => ({ ...prevFormState, [e.target.name]: e.target.value }));
    }

    return (
        <div className='contactContainer'>
            <div className='contactLeft'>
                {
                    contactInfo.map((contact, i) => (
                        <div key={i}>
                            <Typography variant="h6" sx={styles.contactInfoTypography}>
                                {contact.icon}
                                <span className="contactName">{contact.name}</span>
                            </Typography>
                            <Typography variant="subtitle1" sx={{ marginLeft: 8.6 }}>
                                {contact.content}
                            </Typography>
                        </div>
                    ))
                }

                <Link
                    variant="h6"
                    href="https://www.linkedin.com/in/ishita-garg-355939189"
                    target="_blank"
                    underline="hover"
                    sx={styles.linkedInContact}
                >
                    <LinkedInIcon />
                    <span className="contactName">Linkedin</span>
                </Link>
            </div>

            <form className="contactRight" onSubmit={handleSubmit}>
                <Typography variant="h3" sx={styles.messageHeading}>Get In Touch</Typography>
                <TextField
                    variant="outlined"
                    label="Enter your name"
                    name="name"
                    value={form.name}
                    autoComplete="off"
                    required
                    type="text"
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    variant="outlined"
                    label="Enter your email address"
                    name="email"
                    value={form.email}
                    autoComplete="off"
                    required
                    type="email"
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    variant="outlined"
                    label="Enter your message"
                    name="message"
                    value={form.message}
                    required
                    multiline
                    rows={6}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                />

                <Button variant="contained" type="submit">Send Message</Button>

            </form>
        </div>
    )
}

export default Contact
