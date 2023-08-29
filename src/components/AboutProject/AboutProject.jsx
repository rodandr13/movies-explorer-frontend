import React from "react";
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <ul className='about-project__list'>
                <li className='information about-project__item'>
                    <h3 className='information__title'>Дипломный проект включал 5 этапов</h3>
                    <p className='information__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className='information about-project__item'>
                    <h3 className='information__title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='information__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className='time-tracker'>
                <li className='time-tracker__item time-tracker__title_type_stages'>
                    <h4 className='time-tracker__title time-tracker__title_type_backend'>1 неделя</h4>
                    <p className='time-tracker__subtitle'>Back-end</p>
                </li>
                <li className='time-tracker__item time-tracker__title_type_weeks'>
                    <h4 className='time-tracker__title time-tracker__title_type_frontend'>4 недели</h4>
                    <p className='time-tracker__subtitle'>Front-end</p>
                </li>
            </ul>
        </section>
    )
}

export default AboutProject;