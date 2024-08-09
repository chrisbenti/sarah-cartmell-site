import { css } from '@emotion/css'
import { SocialIcon } from 'react-social-icons'
import { SOCIAL_LINKS } from './data'

export const Social: React.FC = () => {
    return (
        <div
            className={css({
                display: 'flex',
                gap: '.5em',
            })}
        >
            {SOCIAL_LINKS.map((link) => (
                <SocialIcon key={link} url={link} />
            ))}
        </div>
    )
}
