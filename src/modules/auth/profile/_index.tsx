import { useState } from 'react'

import { LogoutOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Typography, Upload, UploadFile, UploadProps } from 'antd'
import { RcFile, UploadChangeParam } from 'antd/es/upload'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import arrow from '../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../constants'
import { useAuthMeLogOutMutation, useAuthMeQuery, useAuthMeUpdateMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard } from '../styles'

export const { Text, Paragraph } = Typography

export const ProfileNew = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()
  const { data: userData, isLoading, isError, isSuccess, isFetching } = useAuthMeQuery()
  const [updateUserName, { data: updatedUserData, isLoading: isUpdating }] =
    useAuthMeUpdateMutation()
  const [logout, { isLoading: isLoggingOut }] = useAuthMeLogOutMutation()
  const [avatarImage, setAvatarImage] = useState(null)
  const navigate = useNavigate()

  const handleUserNameChange = async (value: string) => {
    await updateUserName({ name: value })
  }

  const handleUserAvatarChange = async (value: string) => {
    console.log('value', value)
  }

  console.log('updatedUserData', updatedUserData?.updatedUser)
  const handleLogout = async () => {
    await logout({})
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  const userName = userData?.name
  const userEmail = userData?.email

  const CustomIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" fill="#808080" stroke="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18.8444C17.3746 18.8444 18.4889 17.7301 18.4889 16.3555C18.4889 14.9809 17.3746 13.8666 16 13.8666C14.6254 13.8666 13.5111 14.9809 13.5111 16.3555C13.5111 17.7301 14.6254 18.8444 16 18.8444ZM16 18.2222C17.031 18.2222 17.8667 17.3865 17.8667 16.3555C17.8667 15.3246 17.031 14.4889 16 14.4889C14.9691 14.4889 14.1334 15.3246 14.1334 16.3555C14.1334 17.3865 14.9691 18.2222 16 18.2222Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9969 11.3777C18.2512 10.6923 17.5642 10.1333 15.978 10.1333C14.3917 10.1333 13.7047 10.6923 12.959 11.3777H10.4C9.36909 11.3777 8.53336 12.2135 8.53336 13.2444V19.4666C8.53336 20.4976 9.36909 21.3333 10.4 21.3333H21.6C22.631 21.3333 23.4667 20.4976 23.4667 19.4666V13.2444C23.4667 12.2135 22.631 11.3777 21.6 11.3777H18.9969ZM18.7535 12L18.6882 11.9396C18.6261 11.8822 18.566 11.8266 18.5087 11.7744C18.2747 11.5611 18.0669 11.3838 17.8429 11.2366C17.4207 10.959 16.8922 10.7555 15.978 10.7555C15.0637 10.7555 14.5352 10.959 14.113 11.2366C13.889 11.3838 13.6812 11.5611 13.4472 11.7744C13.3898 11.8267 13.3299 11.8821 13.2677 11.9396L13.2024 12H10.4C9.71273 12 9.15558 12.5571 9.15558 13.2444V19.4666C9.15558 20.1539 9.71273 20.7111 10.4 20.7111H21.6C22.2873 20.7111 22.8445 20.1539 22.8445 19.4666V13.2444C22.8445 12.5571 22.2873 12 21.6 12H18.7535Z"
        fill="white"
      />
    </svg>
  )
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader()

    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
  }

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'

    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }

    return isJpgOrPng && isLt2M
  }
  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)

      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <>
      <StyledBackToCardLink to={`${MAIN_PATH.Cards}`}>
        <img src={arrow} alt="arrow-back" />
        Back to card pack
      </StyledBackToCardLink>

      <StyledCard title={'Personal information'} headStyle={cardHeadStyle}>
        <StyledContent>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>

          <StyledParagraph
            editable={{ onChange: handleUserNameChange }}
            disabled={isFetching || isUpdating}
          >
            {userName}
          </StyledParagraph>

          <StyledProfileText>{userEmail}</StyledProfileText>

          <StyledProfileButton
            onClick={handleLogout}
            loading={isLoggingOut}
            icon={<LogoutOutlined />}
          >
            Log out
          </StyledProfileButton>
        </StyledContent>
      </StyledCard>
    </>
  )
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

const StyledParagraph = styled(Paragraph)`
  margin-top: 14px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  width: 90%;
  margin-left: 1.4rem;
`

const StyledBackToCardLink = styled(NavLink)`
  display: block;
  text-align: start;
  text-decoration: none;
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-left: 5rem;

  &:hover {
    color: black;
    opacity: 0.7;
  }
`
const StyledProfileText = styled(Text)`
  margin-top: 1.7rem;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #c2c2c2;
`

const StyledProfileButton = styled(Button)`
  margin-top: 29px;
  margin-bottom: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

{
  /*<AvatarWrapper>
 <Avatar
 size={96}
 style={{ backgroundColor: '#42b72a', position: 'relative', zIndex: 1 }}
 icon={<UserOutlined />}
 >
 {'user'}
 </Avatar>
 <Avatar src={icon} style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2 }} />
 </AvatarWrapper>*/
}

/*<Avatar.Group style={{ position: 'relative', marginBottom: '24px' }}>
  <Avatar
    shape="square"
    size={96}
    icon={avatarImage ? null : <UserOutlined />}
    src={avatarImage || null}
  >
    {'user'}
  </Avatar>
  <Upload>
    {' '}
    {/!* onChange={handleUserAvatarChange}*!/}
    <Button
      icon={<CustomIcon />}
      style={{
        border: 'none',
        background: 'transparent',
        position: 'absolute',
        bottom: 0,
        right: -15,
        padding: 0,
      }}
    />
  </Upload>
</Avatar.Group>*/

{
  /*   <ArrowLeftOutlined style={{ marginRight: '5px' }} />*/
}

/*  if (isFetchBaseQueryError(userQueryError)) {
 return <div>{userQueryError.data.error}</div>
 }*/

/*  if (!userData) navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)*/

/*      if (userQueryError || updateUserNameError || logoutError) {
 if (isFetchBaseQueryError(userQueryError)) {
 console.log('userQueryError', userQueryError)
 notification.error({
 message: userQueryError.data.error,
 placement: 'top',
 })
 }
 if (isFetchBaseQueryError(updateUserNameError)) {
 notification.error({
 message: updateUserNameError.data.error,
 placement: 'top',
 })
 }
 if (isFetchBaseQueryError(logoutError)) {
 notification.error({
 message: logoutError.data.error,
 placement: 'top',
 })
 }
 }*/

/*
 const InputField = ({ name, label, rules, placeholder, ...rest }) => (
 <Form.Item name={name} label={label} rules={rules} autoComplete="on">
 <Controller
 name={name}
 control={rest.control}
 render={({ field }) => <Input {...field} placeholder={placeholder} />}
 />
 </Form.Item>
 );*/

/*  */

/*const handleUserNameChange = async (value: string) => {
  try {
    await updateUserName({ name: value }).unwrap()
    await trigger()
  } catch (error: unknown) {
    if ('data' in error && isFetchBaseQueryError(error)) {
      console.error(error)
    }
  }
}
 {updateUserNameError && (
 <StyledErrorText>{updateUserNameError?.data?.error}</StyledErrorText>
 )}
*/
