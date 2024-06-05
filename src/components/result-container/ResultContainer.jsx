import Title from "../title/Title"
import style from './result.module.css'

const ResultContainer=()=>{
    return (
        <>
        <div className={style.result}>
            <Title text='Your Result' />
            <div className={style.circle}>
                <h3 className={style.number}>76</h3>
                <p>of 100</p>
            </div>
            <h3 className={style.titleSecondary}>Great</h3>
            <p className={style.text}>Your performance exceed 65% of the people conducting the test here!</p>
        </div>
          

        </>
    )
}
export default ResultContainer