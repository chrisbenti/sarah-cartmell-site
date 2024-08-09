import { css } from '@emotion/css'
import photo from './assets/sarah.jpg'
import { BIO, DESCRIPTION, NAME } from './data'
import { MEDIUM_SCREEN_SIZE, SMALL_SCREEN_SIZE } from './constants'

export const Introduction: React.FC = () => (
    <div
        className={css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1em',
            [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                flexDirection: 'column',
            },
        })}
    >
        <img
            className={css({
                maxWidth: '300px',
                borderRadius: '100%',
                [`@media (max-width: ${MEDIUM_SCREEN_SIZE})`]: {
                    maxWidth: '200px',
                },
            })}
            src={photo}
            alt="Sarah Cartmell"
        />
        <div
            className={css({
                display: 'flex',
                gap: '1em',
                flexDirection: 'column',
                textAlign: 'left',
                [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                    textAlign: 'center',
                },
            })}
        >
            <div
                className={css`
                    font-size: 4em;
                    @media (max-width: ${MEDIUM_SCREEN_SIZE}) {
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
