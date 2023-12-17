import classnames from 'classnames/bind';
import styles from './heading.module.scss';

const cx = classnames.bind(styles);

const Heading = ({children, color, level,textAlign, marginBottom, marginTop, marginLeft, marginRight,paddingBottom,paddingTop,paddingRight,paddingLeft}) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;

    const headingClasses = cx({
        heading: true,
        [`heading${level}`] : level,

        [`font-color-${color}`] : color,

        [`margin-right-${marginRight}`] : marginRight,
        [`margin-left-${marginLeft}`] : marginLeft,
        [`margin-top-${marginTop}`] : marginTop,
        [`margin-bottom-${marginBottom}`] : marginBottom,

        [`padding-right-${paddingRight}`] : paddingRight,
        [`padding-left-${paddingLeft}`] : paddingLeft,
        [`padding-top-${paddingTop}`] : paddingTop,
        [`padding-bottom-${paddingBottom}`] : paddingBottom,
        
        [`text-align-${textAlign}`] : textAlign
    });

    return <Tag className={headingClasses}>{children}</Tag>
}
export default Heading;