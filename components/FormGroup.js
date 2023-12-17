import styles from './formgroup.module.scss';

const FormGroup = ({children}) => {
    return <div classname={styles.formgroup}>{children}</div>

}
export default FormGroup;