import React from 'react';
import { Stack, Typography } from '@mui/material';
import IconGym from '../../images/icons/gym.png';

export default function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '270px',
        cursor: 'pointer',
        gap: '47px',
      }}
    >
      <img src={IconGym} alt="icon" style={{ width: '40px', height: '40px' }} />
    </Stack>
  );
}
