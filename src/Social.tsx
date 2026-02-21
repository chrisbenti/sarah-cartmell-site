import { css } from '@emotion/css'
import { SocialIcon } from 'react-social-icons'
import { SOCIAL_LINKS } from './data'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ButtonStyle } from './Button'
import { BACKGROUND_COLOR, TEXT_COLOR, PRIMARY_COLOR, ACCENT_COLOR } from './constants'

const EmailModal: React.FC<{ email: string; onDismiss: () => void }> = ({
    email,
    onDismiss,
}) => {
    // Add state for clipboard functionality
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000) // Reset "Copied!" message after 2 seconds
        } catch (err) {
            console.error('Failed to copy email: ', err)
            // Optionally, provide user feedback that copy failed
        }
    }

    // Effect for Escape key and scroll prevention
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onDismiss()
            }
        }

        // Prevent scrolling on body
        document.body.style.overflow = 'hidden'

        // Add event listener for Escape key
        document.addEventListener('keydown', handleEscape)

        // Cleanup function
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = '' // Restore scrolling
        }
    }, [onDismiss]) // Rerun if onDismiss changes

    return (
        <div>
            <div
                className={css({
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100vw', // Use 100vw for full viewport width
                    height: '100vh', // Use 100vh for full viewport height
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slightly darker overlay
                    zIndex: 1000, // Ensure it's on top
                })}
            >
                <div
                    className={css({
                        position: 'absolute',
                        width: 'calc(100% - 4em)', // More padding
                        maxWidth: '350px', // Slightly larger max-width
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: BACKGROUND_COLOR,
                        color: TEXT_COLOR,
                        padding: '2em', // Increased padding
                        borderRadius: '8px', // Slightly more rounded
                        boxSizing: 'border-box',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', // Subtle shadow
                    })}
                >
                    <div
                        className={css({
                            display: 'flex',
                            justifyContent: 'space-between', // Space out close button and email
                            alignItems: 'center',
                            marginBottom: '1em',
                        })}
                    >
                        <div
                            className={css({
                                fontSize: '1.1em', // For copied message
                                color: PRIMARY_COLOR,
                                opacity: copied ? 1 : 0, // Control visibility with state
                                transition: 'opacity 0.3s ease-in-out',
                            })}
                        >
                            {copied ? 'Copied!' : ''}
                        </div>
                        <button
                            className={css({
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1.8em', // Slightly smaller 'X'
                                fontWeight: 'bold',
                                color: TEXT_COLOR,
                                lineHeight: '1',
                                padding: '0',
                                '&:hover': {
                                    color: PRIMARY_COLOR,
                                },
                            })}
                            onClick={onDismiss}
                            aria-label="Close modal"
                        >
                            &times; {/* HTML entity for a more elegant 'X' */}
                        </button>
                    </div>
                    <div
                        className={css({
                            display: 'flex',
                            gap: '0.5em', // Reduced gap for clipboard button
                            flexDirection: 'column',
                            alignItems: 'center',
                        })}
                    >
                        <div
                            className={css({
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5em',
                                fontSize: '1.1em', // Reduced font size to prevent multi-line display
                                padding: '0.5em 0.8em',
                                border: `1px solid ${ACCENT_COLOR}`,
                                borderRadius: '4px',
                                wordBreak: 'break-all',
                                width: 'fit-content', // Only take width of content
                                margin: '0.5em auto', // Center the email block
                            })}
                        >
                            <span>{email}</span>
                            <button
                                className={css({
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: PRIMARY_COLOR,
                                    fontSize: '1em',
                                    padding: '0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    '&:hover': {
                                        filter: 'brightness(1.2)',
                                    },
                                })}
                                onClick={handleCopy}
                                aria-label="Copy email to clipboard"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-copy"
                                >
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            </button>
                        </div>
                        <a
                            href={`mailto:${email}`}
                            target="_blank"
                            className={css([ButtonStyle, { width: '100%', padding: '0.8em 0', marginTop: '1em' }])}
                            onClick={onDismiss}
                        >
                            Send Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EmailButton: React.FC<{ email: string }> = ({ email }) => {
    const [showModal, setShowModal] = React.useState(false)
    return (
        <>
            {showModal &&
                ReactDOM.createPortal(
                    <EmailModal
                        onDismiss={() => setShowModal(false)}
                        email={email}
                    />,
                    document.body
                )}
            <SocialIcon
                className={css({
                    cursor: 'pointer',
                    width: '2.5em !important',
                    height: '2.5em !important',
                    transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)', // More subtle enlargement
                        filter: 'brightness(1.1)', // Slight brightness increase
                    },
                })}
                url={`mailto:${email}`}
                as="div"
                onClick={() => {
                    setShowModal(true)
                }}
            />
        </>
    )
}

export const Social: React.FC = () => {
    return (
        <div
            className={css({
                display: 'flex',
                gap: '1em', // Increased gap
            })}
        >
            {SOCIAL_LINKS.map((link) =>
                link.includes('@') ? (
                    <EmailButton key={link} email={link} />
                ) : (
                    <SocialIcon
                        key={link}
                        url={link}
                        className={css({
                            width: '2.5em !important',
                            height: '2.5em !important',
                            transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)', // More subtle enlargement
                                filter: 'brightness(1.1)', // Slight brightness increase
                            },
                        })}
                    />
                )
            )}
        </div>
    )
}
