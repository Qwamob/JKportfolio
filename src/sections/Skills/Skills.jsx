import styles from './SkillStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="C#" />
            <SkillList src={checkMarkIcon} skill=".NET" />
            <SkillList src={checkMarkIcon} skill="MVC" />
            <SkillList src={checkMarkIcon} skill="WPF" />
            <SkillList src={checkMarkIcon} skill="Python" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="MS-SQL" />
            <SkillList src={checkMarkIcon} skill="Azure" />
            <SkillList src={checkMarkIcon} skill="Git" />
        </div>
        <hr />
    </section>
  )
}

export default Skills