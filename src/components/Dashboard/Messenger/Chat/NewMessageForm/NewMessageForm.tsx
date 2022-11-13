import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { Formik } from 'formik';
import { useState } from 'react';

import { sendDirectMessage } from '../../../../../api/socketConnection';
import SendIcon from '../../../../../images/arrow-up.svg';
import EmojiIcon from '../../../../../images/emoji.svg';
import { useAppSelector } from '../../../../../store/hooks';
import ButtonIcon from '../../../../UI/Buttons/ButtonIcon/ButtonIcon';
import Input from '../../../../UI/Input/Input';
import { EmojiPickerWrapper, FormWrapper } from './NewMessageForm.styles';

interface FormValues {
  message: string;
}

const NewMessageForm = () => {
  const [isEmojiesActive, setIsEmojiesActive] = useState<boolean>(false);

  const chosenChatDetails = useAppSelector((state) => state.chat.chosenChatDetails);

  const initialValues: FormValues = {
    message: '',
  };

  const onSubmit = (values: FormValues) => {
    if (values.message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails?.id,
        content: values.message,
      });
    }
  };

  const onEmpjiesClick = () => setIsEmojiesActive(!isEmojiesActive);

  const onEmojiChoose = (
    emojiData: EmojiClickData,
    values: FormValues,
    setFieldValue: (field: string, value: string, shouldValidate?: boolean | undefined) => void,
  ) => {
    const newValue = values.message + emojiData.emoji;

    setFieldValue('message', newValue);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ values, setFieldValue, handleChange }) => (
          <FormWrapper>
            <ButtonIcon
              icon={EmojiIcon}
              alt="Emoji"
              colorTheme="secondary"
              onClick={onEmpjiesClick}
            />
            {isEmojiesActive && (
              <EmojiPickerWrapper>
                <EmojiPicker
                  onEmojiClick={(emojiData) => onEmojiChoose(emojiData, values, setFieldValue)}
                  autoFocusSearch={false}
                  theme={Theme.AUTO}
                  lazyLoadEmojis={true}
                />
              </EmojiPickerWrapper>
            )}
            <Input
              id="message"
              name="message"
              onChange={handleChange}
              placeholder={`Write a message...`}
              defaultValue={values.message}
            />
            <ButtonIcon icon={SendIcon} alt="Send" type="submit" />
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};

export default NewMessageForm;
