import { Card, CardContent, Rating, Typography } from '@mui/material';
import React from 'react';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Stack } from '@mui/system';
import styled from 'styled-components';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function Skills({ ProfileData }) {

    const Typo = styled(Typography)(() => ({
        fontSize: '14px',
        fontWeight: '500',
        textTransform: 'capitalize',
        color: '#131627'
    }));

    const TypoVal = styled(Typography)(() => ({
        fontSize: '14px',
        marginLeft: '3px'
    }));

    const TypoHeader = styled(Typography)(() => ({
        fontSize: '16px',
        marginLeft: '5px',
        fontWeight: '500',
        textTransform: 'capitalize',
        color: '#131627'
    }));

    const StackRow = styled(Stack)(({ direction }) => ({
        flexDirection: direction === 'column' ? 'column' : 'row',
    }));

    return (
        <Card>
            <CardContent>
                <Stack spacing={2} direction={'column'}>
                    <StackRow>
                        <img src='/images/pesonalProfile/skills/icon.svg' />
                        <TypoHeader>Skills & Career:</TypoHeader>
                    </StackRow>

                    <Stack direction={'column'}>
                        <Typo>Education:</Typo>
                        {ProfileData && ProfileData.study_situations && ProfileData.study_situations.map((val, index) => (
                            <>
                                <ul style={{ padding: 0, margin: 0, marginLeft: '5%' }}>
                                    <li>
                                        <TypoVal>{val.study}</TypoVal>
                                    </li>
                                    <li>
                                        <TypoVal>{val.degree}</TypoVal>
                                    </li>
                                </ul>
                            </>
                        ))}
                    </Stack>

                    <Stack direction={'column'}>
                        <Typo>Certifications:</Typo>
                        {ProfileData && ProfileData.certificates && ProfileData.certificates.map((val, index) => (
                            <>
                                <ul style={{ padding: 0, margin: 0, marginLeft: '5%' }}>
                                    <li>
                                        <TypoVal>{val.content}</TypoVal>
                                    </li>
                                </ul>
                            </>
                        ))}
                    </Stack>

                    <Stack direction={'column'}>
                        <Typo>Career:</Typo>
                        {ProfileData && ProfileData.careers && ProfileData.careers.map((val, index) => (
                            <>
                                <ul style={{ padding: 0, margin: 0, marginLeft: '5%' }}>
                                    <li>
                                        <TypoVal>{val.content}</TypoVal>
                                    </li>
                                </ul>
                            </>
                        ))}
                    </Stack>

                    <Stack direction={'column'}>
                        <Typo>Skills:</Typo>
                        <ul style={{ padding: 0, margin: 0, marginLeft: '5%' }}>
                            {ProfileData && ProfileData.skills && ProfileData.skills.map((val, index) => (
                                <li key={index}>
                                    <StackRow>
                                        <TypoVal>{val.name}</TypoVal>
                                        <Rating name="size-medium" defaultValue={val.rate} />
                                    </StackRow>
                                </li>
                            ))}
                        </ul>
                    </Stack>

                    <Stack direction={'column'}>
                        <Typo>Languages:</Typo>
                        <ul style={{ padding: 0, margin: 0, marginLeft: '5%' }}>
                            {ProfileData && ProfileData.languages && ProfileData.languages.map((val, index) => (
                                <li key={index}>
                                    <StackRow>
                                        <TypoVal>{val.name}</TypoVal>
                                        <Rating name="size-medium" defaultValue={val.rate} />
                                    </StackRow>
                                </li>
                            ))}
                        </ul>
                    </Stack>

                </Stack>
            </CardContent>
        </Card>
    )
}
