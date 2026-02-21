import { css } from '@emotion/css'
import photo from './assets/sarah.jpg'
import lowRezPhoto from './assets/sarah-low-rez.jpg'
import { BIO, DESCRIPTION, NAME } from './data'
import {
    FONT_SIZE_XL,
    FONT_SIZE_LG,
    FONT_SIZE_MD,
    SMALL_SCREEN_SIZE,
    PRIMARY_COLOR,
} from './constants'
import { useState } from 'react'

export const Introduction: React.FC = () => {
    const [lowRezLoaded, setLowRezLoaded] = useState(false)
    const [highRezLoaded, setHighRezLoaded] = useState(false)
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
            {/* Wrapper div to ensure styles are applied correctly */}
            <div
                className={css({
                    width: '300px', // Changed from maxWidth to width for static width
                    height: '300px', // Added static height
                    borderRadius: '50%',
                    border: `2px solid ${PRIMARY_COLOR}`,
                    display: 'flex', // Use flex to center the image if needed, though ProgressiveImage handles it
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden', // Ensure border-radius clips the image
                    [`@media (max-width: ${SMALL_SCREEN_SIZE})`]: {
                        width: '200px', // Changed from maxWidth to width for static width on mobile
                        height: '200px', // Match height to width for aspect ratio
                    },
                })}
            >
                <img
                    src={lowRezPhoto}
                    alt="Low resolution placeholder"
                    onLoad={() => setLowRezLoaded(true)}
                    style={{
                        display: lowRezLoaded && !highRezLoaded ? '' : 'none',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                {/* Preload low-res image */}
                <img
                    src={photo}
                    alt="High resolution image"
                    style={{
                        display: highRezLoaded ? '' : 'none',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    onLoad={() => setHighRezLoaded(true)}
                />
            </div>
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
                        color: 'var(--text-color)', // Use CSS variable for theme-dependent color
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
