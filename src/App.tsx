import { css } from '@emotion/css'
import { Links } from './Links'
import { Introduction } from './Introduction'
import { Social } from './Social'
import { SMALL_SCREEN_SIZE } from './constants'

function App() {
    return (
        <div
            className={css(`
                min-height: 100svh;
                min-height: -webkit-fill-available;
                width: 100vw;
                overflow-x: hidden; /* Prevent horizontal scroll */
                
                display: flex;
                justify-content: center; /* Center content horizontally */
                align-items: center; /* Center content vertically */
            `)}
        >
            <div
                className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2.5em',
                    maxWidth: '800px', // Adjusted max-width for a single column
                    width: '100%',
                    padding: '2.5em',
                    margin: 'auto', // Center the container
                    boxSizing: 'border-box',
                    [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                        padding: '4em 2em',
                    },
                })}
            >
                <Introduction />
                <Links />
                <Social /> {/* Moved Social to the bottom */}
            </div>
        </div>
    )
}

export default App
