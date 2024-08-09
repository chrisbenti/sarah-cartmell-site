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
                min-height: -webkit-fill-available
                
                max-width: 100vw;
                overflow-y: hidden;

                display:flex;
            `)}
        >
            <div
                className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2em',
                    maxWidth: '800px',
                    padding: '2em',
                    margin: 'auto',
                    [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                        padding: '4em 2em',
                    },
                })}
            >
                <Introduction />
                <Social />
                <Links />
            </div>
        </div>
    )
}

export default App
