import { useState } from 'react'
import { css } from '@emotion/css'
import photo from './assets/sarah.jpg'
import { BIO, DESCRIPTION, NAME } from './data'
import { FONT_SIZE_XL, FONT_SIZE_LG, FONT_SIZE_MD, SMALL_SCREEN_SIZE, PRIMARY_COLOR, TEXT_COLOR } from './constants'

export const Introduction: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
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
                onLoad={() => setIsLoaded(true)}
                className={css({
                    opacity: isLoaded ? 1 : 0, // Initial opacity 0, fades to 1 on load
                    filter: isLoaded ? 'none' : 'blur(10px)', // Apply blur initially, remove on load
                    transition: 'opacity 0.5s ease-in-out, filter 0.5s ease-in-out', // Smooth transition for opacity and filter
                    width: '300px', // Changed from maxWidth to width for static width
                    height: '300px', // Added static height
                    borderRadius: '50%',
                    border: `2px solid ${PRIMARY_COLOR}`,
                    [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                        width: '200px', // Changed from maxWidth to width for static width on mobile
                        height: '200px', // Match height to width for aspect ratio
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
}