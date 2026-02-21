import { css } from '@emotion/css'
import ProgressiveImage from '@dipakshiroya/react-progressive-image'
import photo from './assets/sarah.jpg'
import { BIO, DESCRIPTION, NAME } from './data'
import { FONT_SIZE_XL, FONT_SIZE_LG, FONT_SIZE_MD, SMALL_SCREEN_SIZE, PRIMARY_COLOR } from './constants'

export const Introduction: React.FC = () => {
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
                <ProgressiveImage
                    src={photo} // High-resolution image
                    placeholderSrc="/assets/sarah-low-rez.jpg" // Low-resolution placeholder
                    alt="Sarah Cartmell"
                    // Styles are now applied to the wrapper, and potentially inherited.
                    // If ProgressiveImage does not inherit, we might need to pass styles down.
                    // For now, let's assume it inherits or handles internal image styling.
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure image fills the wrapper
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
