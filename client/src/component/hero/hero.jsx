import style from './hero.module.scss'

const hero = ({ url, title, children }) => {

    return (
        <div className={ style.hero } style={{ '--hero-image-url': `url(${url})` }}>
            <h1 className={ style.hero__title }>{ title }</h1>
            { children }
        </div>
    )
}

export default hero;