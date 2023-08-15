import React from 'react'
import { useSelector } from 'react-redux'
import BodyPartCard from './BodyPartCard'
import { Typography } from '@mui/material'

const BodyParts = () => {
    const bodyParts = useSelector(state => state.allExercises.bodyParts)

    return (
        <div>
            <Typography variant='h6' ml={2}>Select bodypart:</Typography>
            <div style={{ display: 'flex', overflow: 'auto', padding: '10px', borderRadius: '20px', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', gap: "20px" }}>
                    {bodyParts.map((bodyPart) => (
                        <BodyPartCard key={bodyPart}
                            bodyPart={bodyPart}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BodyParts