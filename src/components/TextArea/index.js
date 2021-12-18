import { useField, ErrorMessage } from 'formik';
import ErrorText from '../ErrorText';
import s from './TextArea.module.scss';

const TextArea = ({
    label,
    id,
    name,
    rows = '5',
    ...rest
}) => {
    const [field, meta] = useField(name);
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formGroup}>
            {label && <label htmlFor={id || name}>{label}</label>}
            <textarea
                className={hasError ? s.danger : ''}
                id={id || name}
                name={name}
                rows={rows}
                {...rest}>
            </textarea>

            {name && <ErrorMessage name={name} component={ErrorText} />}
        </div>
    )
}

export default TextArea;
