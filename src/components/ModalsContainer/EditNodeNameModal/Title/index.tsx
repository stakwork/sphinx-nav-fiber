import { useEffect, useState } from 'react'
import styled from 'styled-components'
import EditNodeIcon from '~/components/Icons/EditNodeIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { TypeBadge } from '~/components/common/TypeBadge'
import { requiredRule } from '~/constants'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { formatLabel } from '../utils'

export const TitleEditor = () => {
  const { open: openAddItemNodeModal } = useModal('changeNodeType')
  const { close } = useModal('editNodeName')

  const { changeNodeTypeFeatureFlag } = useFeatureFlagStore((s) => ({
    changeNodeTypeFeatureFlag: s.changeNodeTypeFeatureFlag,
  }))

  const selectedNode = useSelectedNode()
  const nodeType = selectedNode?.node_type as string

  const [properties, setProperties] = useState<{ [key: string]: unknown }>({})

  useEffect(() => {
    if (selectedNode?.properties) {
      setProperties(selectedNode.properties)
    }
  }, [selectedNode])

  const handleEditNode = () => {
    close()
    openAddItemNodeModal()
  }

  const handleChange = (key: string, value: string) => {
    setProperties((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Edit Node</StyledText>
          <LabelWrapper>
            <TypeBadge type={nodeType} />
            {changeNodeTypeFeatureFlag && (
              <EditIconWrapper onClick={handleEditNode}>
                <EditNodeIcon />
              </EditIconWrapper>
            )}
          </LabelWrapper>
        </Flex>
      </Flex>

      <ScrollableContent>
        {Object.keys(properties).map((key) => (
          <Flex key={key} mb={18}>
            <LabelText
              style={{
                marginBottom: 8,
              }}
            >
              {formatLabel(key)}
            </LabelText>
            <TextInput
              id={`cy-${key}`}
              maxLength={50}
              name={`properties.${key}`}
              onChange={(value: string) => handleChange(key, value)}
              placeholder={`Please Enter the ${key}`}
              rules={key === 'name' ? { ...requiredRule } : {}}
            />
          </Flex>
        ))}
      </ScrollableContent>
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`

const LabelText = styled(Text)`
  color: ${colors.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`

const LabelWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 5px 0 0 40px;
`

const EditIconWrapper = styled(Flex)`
  align-items: center;
  cursor: pointer;
`

const ScrollableContent = styled(Flex)`
  display: flex;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 40px;
  width: calc(100% + 40px);
`
