import { css } from '@emotion/css'
import { LINK_DATA } from './data'
import { ButtonStyle } from './Button'

const Link: React.FC<{ name: string; url: string }> = ({ name, url }) => (
    <a href={url} target="_blank" className={css([ButtonStyle])}>
        {name}
    </a>
)
export const Links: React.FC = () => {
    return (
        <div
            className={css({
                display: 'flex',
                gap: '1em',
                flexDirection: 'column',
                textAlign: 'center',
                width: '100%',
                maxWidth: '300px',
            })}
        >
            {LINK_DATA.map((link) => (
                <Link key={link.name} name={link.name} url={link.url} />
            ))}
        </div>
    )
}
