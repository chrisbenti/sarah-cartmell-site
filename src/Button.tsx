import { css } from '@emotion/css'
import { PRIMARY_COLOR, TEXT_COLOR, ACCENT_COLOR } from './constants'

export const ButtonStyle = css({
    border: `1px solid ${ACCENT_COLOR}`, // Thinner, more subtle border
    padding: '0.8em 1.5em', // Slightly refined padding
    width: 'calc(100% - 1.6em - 2px)', // Adjusted calc for new padding and border
    color: TEXT_COLOR,
    backgroundColor: 'transparent',
    textDecoration: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: '4px', // Less rounded corners for a sharper look
    transition: 'all 0.2s ease-in-out', // Quicker, subtle transition

    '&:hover': {
        backgroundColor: PRIMARY_COLOR,
        color: 'white', // White text on primary color hover
        border: `1px solid ${PRIMARY_COLOR}`, // Border matches background on hover
    },
})
