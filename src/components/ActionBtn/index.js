import Button from "../Button";
import s from './ActionBtn.module.scss';

const ActionBtn = ({
    icon, 
    children, 
    ...rest
}) => {
    return (
        <div className={s.actionBtn}>
            <Button type='button' icon {...rest}>
                {icon}
            </Button>
            <span>{children}</span>
        </div>

    )
}
export default ActionBtn;
