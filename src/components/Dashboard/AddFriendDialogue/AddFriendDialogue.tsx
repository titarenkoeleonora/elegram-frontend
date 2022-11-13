import { Formik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';

import { sendFriendInvintation } from '../../../store/actions/friendsActions';
import { InvitationData } from '../../../types';
import { useAppDispatch } from '../../../utils/hooks/reduxHooks';
import Button from '../../UI/Buttons/Button/Button';
import Input from '../../UI/Input/Input';
import {
  AddFriendsDialogueBody,
  AddFriendsDialogueContent,
  AddFriendsDialogueFooter,
  AddFriendsDialogueHeader,
  AddFriendsDialogueWrapper,
  FormContainer,
} from './AddFriendDialogue.styles';

interface AddFriendsDialogueProps {
  onClose(): void;
}

const AddFriendsDialogue: FC<AddFriendsDialogueProps> = ({ onClose }) => {
  const initialValues: InvitationData = {
    targetMailAddress: '',
  };

  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    targetMailAddress: Yup.string().email('Invalid e-mail format').required('E-mail is required'),
  });

  const onSendInvitation = async (values: InvitationData) => {
    await dispatch(sendFriendInvintation(values));
    onClose();
  };

  return (
    <>
      {
        <AddFriendsDialogueWrapper>
          <AddFriendsDialogueContent>
            <AddFriendsDialogueHeader>Invite a friend</AddFriendsDialogueHeader>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { resetForm }) => {
                onSendInvitation(values);
                resetForm();
              }}
              validationSchema={validationSchema}
            >
              {({ values, handleChange, isValid, dirty }) => (
                <FormContainer>
                  <AddFriendsDialogueBody>
                    <Input
                      label="Enter e-mail of user which you would like to invite"
                      id="targetMailAddress"
                      name="targetMailAddress"
                      onChange={handleChange}
                      defaultValue={values.targetMailAddress}
                    />
                  </AddFriendsDialogueBody>
                  <AddFriendsDialogueFooter>
                    <Button secondary onClick={onClose}>
                      Close
                    </Button>
                    <Button primary type="submit" disabled={!isValid && dirty}>
                      Invite
                    </Button>
                  </AddFriendsDialogueFooter>
                </FormContainer>
              )}
            </Formik>
          </AddFriendsDialogueContent>
        </AddFriendsDialogueWrapper>
      }
    </>
  );
};

export default AddFriendsDialogue;
