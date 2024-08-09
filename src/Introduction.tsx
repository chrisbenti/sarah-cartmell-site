import { css } from '@emotion/css'
import photo from './assets/sarah.jpg'

export const Introduction: React.FC = () => (
    <div
        className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1em',
        })}
    >
        <img
            className={css({
                maxWidth: '300px',
                borderRadius: '100%',
            })}
            src={photo}
            alt="Sarah Cartmell"
        />
        <div
            className={css({
                display: 'flex',
                gap: '.5em',
                flexDirection: 'column',
                textAlign: 'center',
            })}
        >
            <div
                className={css({
                    fontSize: '4em',
                })}
            >
                Sarah Cartmell
            </div>
            <div
                className={css({
                    fontSize: '1.25em',
                    fontWeight: 'bold',
                })}
            >
                PhD Student, Graduate School of Education @ Rutgers University
            </div>
            <div
                className={css({
                    fontSize: '1em',
                })}
            >
                Sarah Cartmell, MEd, is a PhD student at Rutgers University in
                New Jersey. She is currently researching fostering the
                mathematical understanding of students from diverse backgrounds
                through rich problem-solving tasks. Her focus on collaborative
                learning spaces is motivated by her seven years of experience
                teaching mathematics at the middle school level.
            </div>
        </div>
    </div>
)
