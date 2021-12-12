import s from './ErrorText.module.scss';

const ErrorText = ({children}) => (
    <p className={s.error}>{children}</p>
)

export default ErrorText;
