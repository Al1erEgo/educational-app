import { useState } from 'react'

import { Modal } from 'antd'

export const usePreview = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  const handlePreview = (img: string) => {
    setPreviewImage(img)
    setPreviewOpen(true)
  }

  const handleCancel = () => setPreviewOpen(false)

  const preview = (
    <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
      <img alt="example" style={{ width: '100%' }} src={previewImage} />
    </Modal>
  )

  return { preview, handlePreview }
}
