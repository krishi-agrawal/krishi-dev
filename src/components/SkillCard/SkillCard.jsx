import "./SkillCard.css"
import { skillSet } from '../../data/data.js'

const SkillCard = () => {
    return (
        <div className='about-description-skills'>
            {skillSet.map((item, index) => {
                return (
                    <div key={index + item.skillName}>
                        <img src={item.skillIcon} alt={item.skillName} />
                        <span className='skill-name'>{item.skillName}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillCard;