import { css } from '@emotion/css'

export const ButtonStyle = css({
    border: '2px solid black',
    padding: '1em',
    width: 'calc(100% - 2em - 4px)', // Sill calc hack
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
})
