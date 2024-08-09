import { css } from '@emotion/css'

const LinkData: { name: string; url: string }[] = [
    {
        name: 'Resume',
        url: 'https://docs.google.com/document/d/1IDcC2engyQOd2iCKzTNOU6HBBdGFEPc5/edit?usp=sharing&ouid=104181975737133773165&rtpof=true&sd=true ',
    },
    {
        name: 'Curriculum Vitae',
        url: 'https://docs.google.com/document/d/1huDRuQfp-JxLvGDYeaUKjsPTv5x3454g4UOFlKKdk9o/edit?usp=sharing ',
    },
]

const Link: React.FC<{ name: string; url: string }> = ({ name, url }) => (
    <a
        href={url}
        className={css({
            border: '2px solid black',
            padding: '1em',
            width: '100%',
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
            {LinkData.map((link) => (
                <Link key={link.name} name={link.name} url={link.url} />
            ))}
        </div>
    )
}
