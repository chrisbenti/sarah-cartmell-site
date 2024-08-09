import { css } from '@emotion/css'
import { LINK_DATA } from './data'

const Link: React.FC<{ name: string; url: string }> = ({ name, url }) => (
    <a
        href={url}
        className={css({
            border: '2px solid black',
            padding: '1em',
            width: 'calc(100% - 2em - 4px)', // Sill calc hack
            color: 'black',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: 'black',
                color: 'white',
            },
        })}
    >
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
