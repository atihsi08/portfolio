import React from 'react';
import { Link, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import medigalpager from '../../images/medicalpager.PNG';
import expensetracker from '../../images/expensetracker.PNG';
import memoriesapp from '../../images/memoriesapp.PNG';
import ecommerce from '../../images/ecommerce.PNG';
import { projectsDetails } from '../../constants/projectsConstants.js';
import './projects.css';

const projectImages = [medigalpager, expensetracker, memoriesapp, ecommerce];

function Projects() {
    return (
        <div className="projectComponent">
            <Grid container spacing={2} alignItems="stretch">
                {
                    projectsDetails.map((project, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                            <Link href={project.href} target="_blank" sx={{ textDecoration: 'none' }}>
                                <Card raised>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={projectImages[index]}
                                        alt={project.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Corinthia', fontSize: 30, color: '#e76f51', fontWeight: 'bold' }}>
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontFamily: 'Playfair Display',textAlign:'justify' }}>
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Projects
