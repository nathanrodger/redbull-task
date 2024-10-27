import style from './card.module.scss';

const Card = ({ title, linkUrl, imageUrl, imageAlt, groupName, time, icon }) => {
    return (
        <a href={ linkUrl } className={ style.card } target="_blank" rel="noreferrer">
            { icon }
            <img className={ style.card__image } alt={ imageAlt } src={ imageUrl } />
            <div className={ style.card__content }>
                <h4 className={ style.card__title }>{ title }</h4>
                <div className={ style.card__pill }>{ groupName }</div>
                <div className={ style.card__time }>{ time }</div>
            </div>
        </a>
    )
}

export default Card;
