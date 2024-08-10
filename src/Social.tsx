import { css } from '@emotion/css'
import { SocialIcon } from 'react-social-icons'
import { SOCIAL_LINKS } from './data'
import React from 'react'
import ReactDOM from 'react-dom'
import { ButtonStyle } from './Button'

const EmailModal: React.FC<{ email: string; onDismiss: () => void }> = ({
    email,
    onDismiss,
}) => {
    return (
        <div>
            <div
                className={css({
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100svw',
                    height: '100svh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                })}
            >
                <div
                    className={css({
                        position: 'absolute',
                        width: '100%',
                        maxWidth: '300px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '1em',
                        borderRadius: '5px',
                    })}
                >
                    <div
                        className={css({
                            display: 'flex',
                            justifyContent: 'right',
                        })}
                    >
                        <div
                            className={css({
                                cursor: 'pointer',
                                fontSize: '1.5em',
                            })}
                            onClick={onDismiss}
                        >
                            ✖
                        </div>
                    </div>
                    <div
                        className={css({
                            display: 'flex',
                            gap: '.5em',
                            flexDirection: 'column',
                        })}
                    >
                        <div
                            className={css({
                                fontSize: '1.5em',
                                textAlign: 'center',
                                width: '100%',
                                margin: '.5em 0',
                            })}
                        >
                            <div>{email}</div>
                        </div>
                        {/* <div className={css([ButtonStyle])}>Copy</div> */}
                        <a
                            href={`mailto:${email}`}
                            target="_blank"
                            className={css([ButtonStyle])}
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
                gap: '.5em',
            })}
        >
            {SOCIAL_LINKS.map((link) =>
                link.includes('@') ? (
                    <EmailButton key={link} email={link} />
                ) : (
                    <SocialIcon key={link} url={link} />
                )
            )}
        </div>
    )
}
