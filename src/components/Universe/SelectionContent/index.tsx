import { SelectionDataNodes } from '../Graph/Cubes/SelectionDataNodes'
import { Lights } from '../Lights'
import { Controls } from './Controls'

export const SelectionContent = () => (
  <>
    <Lights />

    <Controls />

    <SelectionDataNodes />
  </>
)
