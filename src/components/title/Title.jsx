import style from './title.module.css'

const Title=({text, color})=>{
    return <h2 className={`${style.title} ${style[color]}`}>{text}</h2>
}
export default Title