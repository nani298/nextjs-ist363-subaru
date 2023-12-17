import classnames from 'classnames/bind';
import Image from 'next/image';
import styles from './btnui.module.scss';

const cx = classnames.bind(styles);

const ButtonUI = ({clickHandler, icon}) => {
    const buttonClasses = cx({
        btnui:true,
        close: icon === 'close'
    });
    return <button 
        className={styles.btnui}
        onClick={clickHandler}
    >
        <Image 
            src={`/images/icons/${icon}.svg`}
            alt={`${icon} icon`}
            width={16}
            height={12}
        />
    </button>
}
export default ButtonUI