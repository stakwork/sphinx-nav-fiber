import { Table as MaterialTable, TableBody, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { MdCheck, MdClose, MdDeleteForever, MdOutlineModeEdit } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { BaseTextInput } from '~/components/BaseTextInput'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import ConfirmPopover from '~/components/common/ConfirmPopover'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { RSS, TWITTER_HANDLE } from '~/constants'
import { deleteRadarData, putRadarData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { RadarRequest, Sources } from '~/types'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead, StyledTableRow } from '../../common'
import { TWITTER_LINK, sourcesMapper } from '../../constants'

type Props = {
  data: Sources[] | undefined
  canEdit: boolean
}

const Table: React.FC<Props> = ({ data, canEdit = false }) => {
  const setSources = useDataStore((s) => s.setSources)

  const [loadingId, setLoadingId] = useState('')

  const handleSave = async (id: string, newData: RadarRequest) => {
    if (data?.length) {
      try {
        await putRadarData(id, newData)

        const indexToUpdate = data?.findIndex((i) => i.ref_id === id)
        const updatedSources = [...data]

        updatedSources[indexToUpdate] = { ...updatedSources[indexToUpdate], source: newData.source }

        setSources(updatedSources)
      } catch (error) {
        console.warn(error)
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
      setSources(data?.filter((i) => i.ref_id !== id))
    } catch (error) {
      console.warn(error)
    } finally {
      setLoadingId('')
    }
  }

  return !data?.length ? (
    <Flex>
      <Text>There is not any results for selected filters</Text>
      <FilterOffIcon />
    </Flex>
  ) : (
    <MaterialTable aria-label="a dense table" component="table" id="sources-table" size="small">
      <StyledTableHead>
        <TableRow component="tr">
          <StyledTableCell className="empty" />
          <StyledTableCell>Type</StyledTableCell>
          <StyledTableCell align="left">Source</StyledTableCell>
          {canEdit && <StyledTableCell align="left" />}
          <StyledTableCell className="empty" />
        </TableRow>
      </StyledTableHead>
      <TableBody component="tbody">
        {data?.map((i: Sources) => (
          <StyledTableRow key={i.source} component="tr">
            <StyledTableCell className="empty" />
            <StyledTableCell align="left">{sourcesMapper[i.source_type]}</StyledTableCell>
            <StyledTableCell align="left">
              <ConditionalWrapper
                condition={canEdit}
                wrapper={(children) => (
                  <EditableCell
                    id={i.ref_id}
                    onSave={(source) => handleSave(i.ref_id, { source, source_type: i.source_type })}
                    value={i.source}
                  >
                    {children}
                  </EditableCell>
                )}
              >
                {i.source_type === TWITTER_HANDLE || i.source_type === RSS ? (
                  <>
                    {i.source_type === TWITTER_HANDLE && (
                      <StyledLink href={`${TWITTER_LINK}/${i.source}`} target="_blank">
                        @{i.source}
                      </StyledLink>
                    )}
                    {i.source_type === RSS && (
                      <StyledLink href={i.source} target="_blank">
                        {i.source}
                      </StyledLink>
                    )}
                  </>
                ) : (
                  <div>{i.source}</div>
                )}
              </ConditionalWrapper>
            </StyledTableCell>
            {canEdit && (
              <StyledTableCell align="left">
                <div className="delete-wrapper" id={`delete-${i.source}`}>
                  {loadingId === i.ref_id ? (
                    <ClipLoader color={colors.white} />
                  ) : (
                    <ConfirmPopover message="Are you sure ?" onConfirm={() => handleRemove(i.ref_id)}>
                      <IconWrapper className="centered">
                        <MdDeleteForever />
                      </IconWrapper>
                    </ConfirmPopover>
                  )}
                </div>
              </StyledTableCell>
            )}
            <StyledTableCell className="empty" />
          </StyledTableRow>
        ))}
      </TableBody>
    </MaterialTable>
  )
}

type ConditionalWrapperProps = {
  condition: boolean
  wrapper: (children: JSX.Element) => JSX.Element
  children: JSX.Element
}

function ConditionalWrapper({ condition, wrapper, children }: ConditionalWrapperProps): JSX.Element {
  return condition ? wrapper(children) : children
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
        console.warn(error)
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
            <MdOutlineModeEdit size={20} />
          </IconWrapper>
        </EditableCellWrapper>
      )}
    </div>
  )
}

export default Table

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
  position: relative;

  ${IconWrapper} {
    visibility: hidden;
  }

  &:hover {
    ${IconWrapper} {
      visibility: visible;
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
