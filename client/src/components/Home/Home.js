import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { introduction } from '../../constants/introductionConstants.js';
import './home.css';

const styles = {
    introductionBox: {
        flex: 1,
        backgroundColor: 'inherit',
        textAlign: 'justify',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px',
        border: 'none',
        color: '#F1FAEE'
    },
    imageBox: {
        flex: 1,
        backgroundColor: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

function Home() {

    return (
        <div className="homeContainer">
            <Container maxWidth="lg" sx={{ display: 'flex' }}>
                <>
                    <Box sx={styles.introductionBox}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            sx={{ textStyle: "bold", fontFamily: 'Corinthia' }}
                        >
                            {introduction.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontFamily: 'Playfair Display' }}
                        >
                            {introduction.summary}
                        </Typography>
                    </Box>
                </>
                <>
                    <div className="imageBox">
                        <img
                            src="./webdeveloper.png"
                            alt="full stack web developer"
                            className="developerImage"
                        />
                    </div>

                </>
            </Container>
        </div>
    )
}

export default Home
