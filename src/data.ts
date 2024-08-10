export const NAME = 'Sarah Cartmell'
export const DESCRIPTION =
    'PhD Student, Graduate School of Education @ Rutgers University'
export const BIO =
    'Sarah Cartmell, MEd, is a PhD student at Rutgers University in New Jersey. She is currently researching fostering the mathematical understanding of students from diverse backgrounds through rich problem-solving tasks. Her focus on collaborative learning spaces is motivated by her seven years of experience teaching mathematics at the middle school level.'

export const SOCIAL_LINKS = [
    'scartmell94@gmail.com',
    'https://www.linkedin.com/in/sarah-cartmell-6774a6114/',
    'https://www.instagram.com/Mrs_Cartmell/',
]

const googleDocPDF = (id: string) =>
    `https://docs.google.com/document/d/${id}/preview`
export const LINK_DATA: { name: string; url: string }[] = [
    {
        name: 'Resume',
        url: googleDocPDF('1IDcC2engyQOd2iCKzTNOU6HBBdGFEPc5'),
    },
    {
        name: 'Curriculum Vitae',
        url: googleDocPDF('1huDRuQfp-JxLvGDYeaUKjsPTv5x3454g4UOFlKKdk9o'),
    },
]
