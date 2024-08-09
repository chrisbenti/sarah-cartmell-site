import { css } from '@emotion/css'
import { SocialIcon } from 'react-social-icons'

export const Social: React.FC = () => {
    return (
        <div
            className={css({
                display: 'flex',
                gap: '.5em',
            })}
        >
            <SocialIcon url="https://www.linkedin.com/in/sarah-cartmell-6774a6114/" />
            <SocialIcon url="mailto:scartmell94@gmail.com" />
            <SocialIcon url="https://www.instagram.com/Mrs_Cartmell/" />
        </div>
    )
}
