import { css } from '@emotion/css'
import { LINK_DATA } from './data'
import { ButtonStyle } from './Button'
import { useTheme } from './contexts/ThemeContext'; // Import useTheme

const Link: React.FC<{ name: string; url: string }> = ({ name, url }) => {
    const { theme } = useTheme(); // Get the current theme

    // Define styles that change based on theme
    const linkStyles = css([
        ButtonStyle, // Apply existing button styles
        {
            // Conditionally apply dark mode styles
            color: theme === 'dark' ? 'var(--link-color)' : '#007bff', // Default blue, use CSS variable for dark mode
            textDecoration: 'none', // Remove underline for cleaner look
            '&:hover': {
                textDecoration: 'underline', // Add underline on hover
            },
        },
    ]);

    return (
        <a href={url} target="_blank" className={linkStyles}>
            {name}
        </a>
    );
}
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
