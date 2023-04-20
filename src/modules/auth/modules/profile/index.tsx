import { LogoutOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'

import arrowBack from '../../../../assets/arrow-back.svg'
import { ErrorServerHandler } from '../../../../components'
import { MAIN_PATH } from '../../../../constants'
import { useAuthorised, useFormData, useMutation } from '../../hooks'
import { UpdateUserNameType } from '../../hooks/use-authform/types'
import { cardHeadStyle, StyledCard } from '../../styles'

import { ProfileAvatar } from './components/profile-avatar'
import {
  StyledBackToCardLink,
  StyledProfileContainer,
  StyledProfileImg,
  StyledProfileParagraph,
  StyledProfileText,
  StyledProfileLogOutButton,
} from './styles'

export const Profile = () => {
  const { data: userData } = useAuthorised()
  const { name: userName = '', email: userEmail = '' } = userData ?? {}

  // const [onSubmit, { isLoading: isUpdating, error: updateUserNameError }] =
  //   useMutation('updateUserName')
  const [handleLogout, { isLoading: isLoggingOut }] = useMutation('logout')

  const [
    onSubmit,
    { handleSubmit, control, setError, errors, watch, setValue },
    { trigger, isLoading: isUpdating, isSuccess, error: updateUserNameError },
  ] = useFormData<UpdateUserNameType>('updateUserName')

  const handleUserNameChange = async (value: string) => {
    await onSubmit({ name: value })
  }

  console.log(errors)

  return (
    <>
      <StyledBackToCardLink to={MAIN_PATH.Cards}>
        <StyledProfileImg src={arrowBack} alt="arrow-back" />
        Go to cards
      </StyledBackToCardLink>
      <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
        <StyledProfileContainer>
          <ProfileAvatar />
          <Form.Item
            validateStatus={errors?.name?.message ? 'error' : ''}
            help={errors?.name?.message}
          >
            <Controller
              name={'name'}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <Input {...field} />
                  <StyledProfileParagraph
                    editable={{ onChange: field.onChange }}
                    disabled={isUpdating}
                  >
                    {field.value}
                  </StyledProfileParagraph>
                </>
              )}
            />
          </Form.Item>
          <StyledProfileParagraph
            editable={{ onChange: handleUserNameChange }}
            disabled={isUpdating}
          >
            {userName}
          </StyledProfileParagraph>

          <ErrorServerHandler error={updateUserNameError} />

          <StyledProfileText>{userEmail}</StyledProfileText>

          <StyledProfileLogOutButton
            onClick={handleLogout}
            loading={isLoggingOut}
            icon={<LogoutOutlined />}
          >
            Log out
          </StyledProfileLogOutButton>
        </StyledProfileContainer>
      </StyledCard>
    </>
  )
}
