import { css } from '@emotion/css'
import photo from './assets/sarah.jpg'
import { BIO, DESCRIPTION, NAME } from './data'
import { FONT_SIZE_XL, FONT_SIZE_LG, FONT_SIZE_MD, SMALL_SCREEN_SIZE, PRIMARY_COLOR, TEXT_COLOR } from './constants'

export const Introduction: React.FC = () => (
    <div
        className={css({
            display: 'flex',
            flexDirection: 'column', // Always stack vertically
            alignItems: 'center', // Always center items horizontally
            gap: '2em', // Adjusted gap
            width: '100%', // Ensure it takes full width
        })}
    >
        <img
            className={css({
                maxWidth: '300px', // Default max width
                borderRadius: '50%',
                border: `2px solid ${PRIMARY_COLOR}`,
                [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                    maxWidth: '200px', // Smaller on very small screens
                },
            })}
            src={photo}
            alt="Sarah Cartmell"
        />
        <div
            className={css({
                display: 'flex',
                gap: '0.75em',
                flexDirection: 'column',
                textAlign: 'center', // Always center text
            })}
        >
            <div
                className={css({
                    fontSize: FONT_SIZE_XL,
                    fontWeight: '700', // Slightly less bold for academic vibe
                    color: TEXT_COLOR, // Use TEXT_COLOR for name
                    [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                        fontSize: FONT_SIZE_LG, // Use LG for small screens
                    },
                })}
            >
                {NAME}
            </div>
            <div
                className={css({
                    fontSize: FONT_SIZE_LG,
                    fontWeight: '600', // Slightly less bold than name
                    [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                        fontSize: FONT_SIZE_MD, // Use MD for small screens
                    },
                })}
            >
                {DESCRIPTION}{' '}
            </div>
            <div
                className={css({
                    fontSize: FONT_SIZE_MD,
                    lineHeight: '1.6', // Increased line height for readability

                })}
            >
                {BIO}
            </div>
        </div>
    </div>
)
