import {Formik, Form, Field} from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Card from "../Card";
import TextArea from "../TextArea";
import Button from '../Button';
import { postTwit, postComment } from '../../store/twit/actions';
import s from './TwitForm.module.scss';

const twitSchema = yup.object().shape({
    text: yup.string().min(3).max(240).required()
})

const TwitForm = ({twitId, isComment = false, onSubmit}) => {
    const dispatch = useDispatch();

    const sendTwit = async (values, {setSubmitting, resetForm}) => {
        setSubmitting(true);

        if (isComment) {
            await dispatch(postComment(values, twitId));
        } else {
            await dispatch(postTwit(values));
        }

        if (onSubmit) onSubmit();

        resetForm();
        setSubmitting(false);
    }

    return (
        <Card>
            <div className={s.twitFormWrapper}>
                <Formik
                    initialValues={{
                        text: ''
                    }}
                    validationSchema={twitSchema}
                    onSubmit={sendTwit}>
                    {
                        ({isSubmitting}) => (
                            <Form>
                                <Field
                                    as={TextArea}
                                    label={isComment ? 'Send a comment' : 'Send a twit'}
                                    name='text'
                                    placeholder={`Enter your ${isComment ? 'comment' : 'twit'} here...`} />

                                <Button type='submit' loading={isSubmitting}>
                                    Send {isComment ? 'Comment' :'Twit'}
                                </Button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </Card>
    )
}

export default TwitForm;
