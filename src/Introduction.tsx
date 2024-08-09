import { css } from '@emotion/css'
import photo from './assets/sarah.jpg'
import { BIO, DESCRIPTION, NAME } from './data'
import { SMALL_SCREEN_SIZE } from './constants'

export const Introduction: React.FC = () => (
    <div
        className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1em',
        })}
    >
        <img
            className={css({
                maxWidth: '300px',
                borderRadius: '100%',
            })}
            src={photo}
            alt="Sarah Cartmell"
        />
        <div
            className={css({
                display: 'flex',
                gap: '.5em',
                flexDirection: 'column',
                textAlign: 'center',
            })}
        >
            <div
                className={css`
                    font-size: 4em;
                    @media (max-width: ${SMALL_SCREEN_SIZE}) {
                        font-size: 3.5em;
                    }
                `}
            >
                {NAME}
            </div>
            <div
                className={css({
                    fontSize: '1.25em',
                    fontWeight: 'bold',
                })}
            >
                {DESCRIPTION}{' '}
            </div>
            <div
                className={css({
                    fontSize: '1em',
                })}
            >
                {BIO}
            </div>
        </div>
    </div>
)
