import { SuperInputText } from '../../components/c1-SuperInputText/SuperInputText'
import { SuperButton } from '../../components/c2-SuperButton/SuperButton'
import { SuperCheckbox } from '../../components/c3-SuperCheckbox/SuperCheckbox'
import { SuperEditableSpan } from '../../components/c4-SuperEditableSpan/SuperEditableSpan'
import { SuperSelect } from '../../components/c5-SuperSelect/SuperSelect'
import { SuperRadio } from '../../components/c6-SuperRadio/SuperRadio'

export const TestPage = () => {
  return (
    <div>
      <SuperInputText />
      <SuperButton />
      <SuperCheckbox />
      <SuperEditableSpan />
      <SuperSelect />
      <SuperRadio />
    </div>
  )
}
