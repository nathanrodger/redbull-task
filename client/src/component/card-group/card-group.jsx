import style from './card-group.module.scss';

const CardGroup = ({ children }) => {
    return (
        <div className={ style['card-group'] }>
            { children }
        </div>
    )
}

export default CardGroup;