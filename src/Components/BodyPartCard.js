import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'
import { useDispatch } from 'react-redux';
import { selectBodyPart } from '../Redux/Exercises/actionExercises'
import weist from '../images/Weist.PNG'
import back from '../images/back.PNG'
import chest from '../images/Chest1.PNG'
import lowerArm from '../images/lowerArm.PNG'
import shoulder from '../images/shoulder.PNG'
import triceps from '../images/triceps.PNG'
import upperLeg from '../images/upperLeg.PNG'
import lowerLeg from '../images/lowerLwg.PNG'
import all from '../images/all.png'
import cardio from '../images/cardio.png'
import neck from '../images/neck.png'


const BodyPartCard = ({ bodyPart }) => {
    // console.log(bodyPart)
    const dispatch = useDispatch();
    const selectPart = (bodyPart) => {
        dispatch(selectBodyPart(bodyPart))
    }

    var imageToDisplay = null;

    switch (bodyPart) {
        case "all":
            imageToDisplay = <img src={all} alt='All'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;

        case "waist":
            imageToDisplay = <img src={weist} alt='Weist'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;

        case "lower legs":
            imageToDisplay = <img src={lowerLeg} alt='Weist'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;

        case "upper legs":
            imageToDisplay = <img src={upperLeg} alt='Upper legs'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;

        case "back":
            imageToDisplay = <img src={back} alt='Back'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;

        case "lower legs":
            imageToDisplay = <img src={Icon} alt='Lower leg'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;

        case "chest":
            imageToDisplay = <img src={chest} alt='Chest'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;
        case "upper arms":
            imageToDisplay = <img src={triceps} alt='Upper Arm'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;
        case "cardio":
            imageToDisplay = <img src={cardio} alt='Cardio'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;
        case "shoulders":
            imageToDisplay = <img src={shoulder} alt='Shoulders'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;
        case "lower arms":
            imageToDisplay = <img src={lowerArm} alt='Lower Arm'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;
        case "neck":
            imageToDisplay = <img src={neck} alt='Neck'
                style={{
                    width: "90%",
                    height: "60%",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}
            />
            break;

        default:

            break;
    }

    return (
        <Box type='Button'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                border: "none",
                width: '215px',
                height: '200px',
                backgroundColor: '#f5f5f5',
                '&:hover': {
                    borderTop: '3px solid #ff3635'
                },
                boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px'
            }}
            onClick={() => {
                selectPart(bodyPart);
                window.scrollTo({ top: 1060, behavior: 'smooth' })
            }}
        >
            <Stack>
                {imageToDisplay}
                <Typography textAlign={'center'} color={'black'} variant='h6' fontWeight={'400'} textTransform={'capitalize'}>{bodyPart}</Typography>
            </Stack>



        </Box>
    )
}

export default BodyPartCard