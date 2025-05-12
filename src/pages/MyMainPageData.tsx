import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';


///* SKILLS DATA *///
export const useSkillCategories = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        {
            title: t('main_skills_programming_languages'),
            icon: '💻',
            skills: [
                { name: 'Java', level: 90, icon: '☕' },
                { name: 'TypeScript', level: 80, icon: '📘' },
                { name: 'Python', level: 60, icon: '🐍' },
                { name: 'C', level: 50, icon: '🔤' },
                { name: 'C#', level: 40, icon: '🎯' }
            ]
        },
        {
            title: t('main_skills_fontend_development'),
            icon: '🎨',
            skills: [
                { name: 'React', level: 90, icon: '⚛️' },
                { name: 'HTML', level: 80, icon: '🌐' },
                { name: 'CSS', level: 80, icon: '🖥️' },
            ]
        },
        {
            title: t('main_skills_backend_databases'),
            icon: '⚙️',
            skills: [
                { name: 'SQL', level: 95, icon: '🧮' },
                { name: 'SpringBoot', level: 80, icon: '🌱' },
                { name: 'PowerBuilder', level: 80, icon: '🏗️' }
            ]
        },
        {
            title: t('main_skills_devops_tools'),
            icon: '🔧',
            skills: [
                { name: 'Git', level: 90, icon: '🌿' },
                { name: 'Selenium', level: 80, icon: '🪲' },
                { name: 'Docker', level: 60, icon: '🐳' },
                { name: 'Jenkins', level: 40, icon: '🤖' },
                { name: 'Azure', level: 20, icon: '☁️' }
            ]
        },
        {
            title: t('main_skills_interests'),
            icon: '🌍',
            skills: [
                { name: t('main_skills_martial_arts'), level: 90, icon: '🥋' },
                { name: t('main_skills_cooking'), level: 70, icon: '🍳' },
                { name: t('main_skills_diving'), level: 60, icon: '🤿' },
                { name: t('main_skills_travel'), level: 50, icon: '✈️' },
                { name: t('main_skills_hiking'), level: 40, icon: '🥾' },
                { name: t('main_skills_gaming'), level: 30, icon: '🎮' },
            ]
        },
        {
            title: t('main_skills_languages'),
            icon: '🗣️',
            skills: [
                { name: t('env_german'), level: 100, icon: '🇩🇪' },
                { name: t('env_english'), level: 90, icon: '🇬🇧' },
                { name: t('env_croatian'), level: 60, icon: '🇭🇷' },
                { name: t('env_french'), level: 40, icon: '🇫🇷' },
                { name: t('main_skills_spanish'), level: 10, icon: '🇪🇸' },
            ]
        }
    ], [i18n.language]);
};


///* EXPERIENCE DATA *///
export const useExperiences = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        {
            id: 1,
            name: t('main_journey_experience_entry_1_name'),
            institution: "Informaticon AG",
            period: "06/2023 - 01/2025",
            location: "Badenerstrasse 549, " + t('main_journey_experience_zurich'),
            description: [
                t('main_journey_experience_entry_1_description_1'),
                t('main_journey_experience_entry_1_description_2'),
                t('main_journey_experience_entry_1_description_3'),
                t('main_journey_experience_entry_1_description_4'),
                t('main_journey_experience_entry_1_description_5'),
            ],
            technologies: ["PowerBuilder", "SQL", "API Integration", "Cloud Solutions"]
        },
        {
            id: 2,
            name: t('main_journey_experience_entry_2_name'),
            institution: "Accenture AG",
            period: "08/2020 - 07/2022",
            location: "Fraumünsterstrasse 16, " + t('main_journey_experience_zurich'),
            description: [
                t('main_journey_experience_entry_2_description_1'),
                t('main_journey_experience_entry_2_description_2'),
                t('main_journey_experience_entry_2_description_3'),
                t('main_journey_experience_entry_2_description_4')
            ],
            technologies: ["Selenium", "CI/CD", "Test Automation", "Gherkin"]
        },
        {
            id: 3,
            name: t('main_journey_experience_entry_3_name'),
            institution: "Noser Young Professionals AG",
            period: "08/2018 - 07/2020",
            location: "Herostrasse 12, " + t('main_journey_experience_zurich'),
            description: [
                t('main_journey_experience_entry_3_description_1'),
                t('main_journey_experience_entry_3_description_2'),
                t('main_journey_experience_entry_3_description_3')
            ],
            technologies: ["Java", "React", "Spring", "SCRUM"]
        }
    ], [i18n.language]);
};


/* EDUCATION DATA */
export const useEducation = () => {
    const { t, i18n } = useTranslation();

    return useMemo(() => [
        {
            id: 1,
            name: t('main_journey_education_entry_1_name'),
            institution: "ZHAW (Zurich University of Applied Sciences)",
            period: "09/2023 - 08/2027 " + t('main_journey_education_expected'),
            location: t('main_journey_education_entry_location_winterthur'),
            description: [
                t('main_journey_education_entry_1_description_1'),
                t('main_journey_education_entry_1_description_2'),
                t('main_journey_education_entry_1_description_3'),
            ]
        },
        {
            id: 2,
            name: t('main_journey_education_entry_2_name'),
            institution: "MP RS 19-2",
            period: "08/2018 - 07/2022",
            location: t('main_journey_education_entry_location_valais'),
            description: [
                t('main_journey_education_entry_2_description_1'),
                t('main_journey_education_entry_2_description_2'),
            ]
        },
        {
            id: 3,
            name: t('main_journey_education_entry_3_name'),
            institution: "Technische Berufsschule Zürich",
            period: "08/2018 - 07/2022",
            location: t('main_journey_education_entry_location_zurich'),
            description: [
                t('main_journey_education_entry_3_description_1'),
                t('main_journey_education_entry_3_description_2'),
                t('main_journey_education_entry_3_description_3'),
            ]
        },
        {
            id: 4,
            name: t('main_journey_education_entry_4_name'),
            institution: "Berufsmaturitätsschule Zürich",
            period: "08/2018 - 07/2022",
            location: t('main_journey_education_entry_location_zurich'),
            description: [
                t('main_journey_education_entry_4_description_1'),
                t('main_journey_education_entry_4_description_2'),
            ]
        }
    ], [i18n.language]);
};