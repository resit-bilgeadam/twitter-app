import {Formik, Form, Field} from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Card from "../Card";
import TextArea from "../TextArea";
import Button from '../Button';
import { postTwit } from '../../store/twit/actions';
import s from './TwitForm.module.scss';

const twitSchema = yup.object().shape({
    text: yup.string().min(3).max(240).required()
})

const TwitForm = () => {
    const dispatch = useDispatch();

    const sendTwit = async (values, {setSubmitting, resetForm}) => {
        setSubmitting(true);

        await dispatch(postTwit(values));

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
                                    label='Send a twit'
                                    name='text'
                                    placeholder='Enter your twit here...' />

                                <Button type='submit' loading={isSubmitting}>
                                    Send Twit
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
