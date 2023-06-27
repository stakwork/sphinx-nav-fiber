import React from 'react'
import { shallow, cleanup, fireEvent, render } from '@testing-library/react'
import { Button } from '../index'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('CheckboxWithLabel changes the text after click', () => {
  const onClick = jest.fn()
  const onPointerDown = jest.fn()

  const { getByTestId, getByText, getByLabelText } = render(
    <Button onClick={onClick} onPointerDown={onPointerDown} disabled={false} id="button-test" kind="big" type="submit">
      {`button text`}
    </Button>,
  )

  expect(getByText(/button text/i)).toBeTruthy()

  fireEvent.click(getByText('button text'))
  expect(onClick).toHaveBeenCalled()
  fireEvent.pointerDown(getByText('button text'))
  expect(onPointerDown).toHaveBeenCalled()
})
