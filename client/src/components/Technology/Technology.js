import { Typography } from '@mui/material';
import React from 'react';
import htmlIcon from '../../images/html.png';
import cssIcon from '../../images/css.png';
import javascriptIcon from '../../images/javascript.png';
import mongodbIcon from '../../images/mongodb.png';
import nodejsIcon from '../../images/nodejs.png';
import npmIcon from '../../images/npm.png';
import reactjsIcon from '../../images/reactjs.png';
import vscodeIcon from '../../images/vscode.png';
import './technology.css';

const iconsList1 = [
    {
        name: 'HTML',
        src: htmlIcon,
    },
    {
        name: 'CSS',
        src: cssIcon,
    },
    {
        name: 'Javascript',
        src: javascriptIcon,
    },
    {
        name: 'NPM',
        src: npmIcon,
    },
]

const iconsList2 = [
    {
        name: 'MongoDB',
        src: mongodbIcon,
    },
    {
        name: 'React',
        src: reactjsIcon,
    },
    {
        name: 'NodeJS',
        src: nodejsIcon,
    },
    {
        name: 'VSCode',
        src: vscodeIcon,
    },
]

function Technology() {
    return (
        <div className='technologyContainer'>
            <Typography
                variant="h2"
                sx={{ fontFamily: 'Corinthia', color: '#F1FAEE', width: '50vw', textAlign: 'center' }}
            >
                Tools and Technologies
            </Typography>
            <div className="technologyIcons">
                {
                    iconsList1.map(icon => (
                        <div className="iconContainer">
                            <img src={icon.src} alt={icon.name} />
                            <span>{icon.name}</span>
                        </div>
                    ))
                }
            </div>

            <div className="technologyIcons">
                {
                    iconsList2.map(icon => (
                        <div className="iconContainer">
                            <img src={icon.src} alt={icon.name} />
                            <span>{icon.name}</span>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Technology
