import React, { useEffect, useState } from 'react'
import { MdCheck, MdClose, MdDeleteForever, MdOutlineModeEdit } from 'react-icons/md'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { BaseTextInput } from '~/components/BaseTextInput'
import { Flex } from '~/components/common/Flex'
import { RadarRequest, Sources } from '~/types'
import { colors } from '~/utils/colors'
import { putRadarData, deleteRadarData, getAdminId } from '~/network/fetchGraphData'
import { ClipLoader } from 'react-spinners'
import { useModal } from '~/stores/useModalStore'
import { useDataStore } from '~/stores/useDataStore'
import ConfirmPopover from '~/components/common/ConfirmPopover'

const TWITTER_LINK = 'https://twitter.com'

type Props = {
  data: Sources[] | undefined
}

type TdProps = {
  width?: string
}

interface ISourceMap {
  [key: string]: string
}

const sourcesMapper: ISourceMap = {
  topic: 'Topic',
  twitter_handle: 'Twitter Handle',
}

const Table: React.FC<Props> = ({ data }) => {
  const { open, setAddNodeModalData } = useModal('addNode')
  const setSources = useDataStore((s) => s.setSources)

  const [loadingId, setLoadingId] = useState('')

  useEffect(() => {
    const init = async () => {
      await getAdminId();

    }

    init();

  }, []);


  const handleOpenModal = () => {
    open()
    setAddNodeModalData('source')
  }

  const handleSave = async (id: string, newData: RadarRequest) => {
    if (data?.length) {
      try {
        await putRadarData(id, newData)

        const indexToUpdate = data?.findIndex((i) => i.id === id)
        const updatedSources = [...data]

        updatedSources[indexToUpdate] = { ...updatedSources[indexToUpdate], source: newData.source }

        setSources(updatedSources)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleRemove = async (id: string) => {
    if (!id || !data?.length) {
      return
    }

    setLoadingId(id)

    try {
      await deleteRadarData(id)
      setSources(data?.filter((i) => i.id !== id))
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingId('')
    }
  }

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Source</Th>
            <Th>
              <AddButton disabled={!!loadingId} onClick={handleOpenModal}>
                Add +
              </AddButton>
            </Th>
          </tr>
        </thead>
        {data?.length && (
          <tbody>
            {data?.map((i: Sources) => (
              <tr key={i.source}>
                <Td>{sourcesMapper[i.source_type]}</Td>
                <Td width="268px">
                  <EditableCell
                    id={i.id}
                    onSave={(source) => handleSave(i.id, { source, source_type: i.source_type })}
                    value={i.source}
                  >
                    {i.source_type === 'twitter_handle' ? (
                      <StyledLink href={`${TWITTER_LINK}/${i.source}`} target="_blank">
                        @{i.source}
                      </StyledLink>
                    ) : (
                      i.source
                    )}
                  </EditableCell>
                </Td>
                <Td className="cell-center">
                  {loadingId === i.id ? (
                    <ClipLoader color={colors.white} />
                  ) : (
                    <ConfirmPopover message="we" onConfirm={() => handleRemove(i.id)}>
                      <IconWrapper className="centered">
                        <MdDeleteForever />
                      </IconWrapper>
                    </ConfirmPopover>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        )}
      </StyledTable>
    </>
  )
}

type EditableCellProps = {
  id?: string
  value: string
  onSave: (name: string) => void
  children: React.ReactNode
}

const EditableCell: React.FC<EditableCellProps> = ({ value, onSave, id, children }) => {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(value)
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    if (id) {
      setLoading(true)

      try {
        await onSave(name)
        setEditing(false)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div>
      {editing ? (
        <EditModeCellWrapper direction="row">
          <BaseTextInput
            className="editable-cell__input"
            name="cell-input"
            onChange={(val) => setName(val)}
            value={name}
          />
          <IconWrapper align="center" justify="center">
            {loading ? <ClipLoader /> : <MdCheck onClick={handleSave} />}
          </IconWrapper>
          <IconWrapper align="center" className="secondary" justify="center" onClick={() => setEditing(false)}>
            <MdClose />
          </IconWrapper>
        </EditModeCellWrapper>
      ) : (
        <EditableCellWrapper direction="row">
          {children}
          <IconWrapper onClick={() => setEditing(true)}>
            <MdOutlineModeEdit />
          </IconWrapper>
        </EditableCellWrapper>
      )}
    </div>
  )
}

export default Table

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: ${colors.white};
`

const Th = styled.th`
  border: 1px solid ${colors.white};
  padding: 8px;
`

const Td = styled.td<TdProps>`
  border: 1px solid ${colors.white};
  width: ${(props) => props.width || 'auto'};
  line-height: 28px;
  padding: 8px;
  height: 40px;
  &.cell-center {
    text-align: center;
    vertical-align: middle;
  }
`

const EditModeCellWrapper = styled(Flex)`
  display: flex;
  width: 250px;
  border: 2px solid ${colors.lightBlue300};
  padding: 4px;
  height: 28px;
  border-radius: 8px;
  box-sizing: border-box;

  .editable-cell__input {
    flex: 1;
    -webkit-text-fill-color: #fff;
    padding: 0 4px;
    color: #fff;
  }
`

const IconWrapper = styled(Flex)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${colors.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`

const EditableCellWrapper = styled(Flex)`
  display: flex;
  padding: 4px;

  ${IconWrapper} {
    display: none;
  }

  &:hover {
    ${IconWrapper} {
      display: block;
    }
  }
`

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  &:visited {
    color: ${colors.white};
  }
`

const AddButton = styled(Button)`
  height: 28px;
  margin: 0 auto;
`
