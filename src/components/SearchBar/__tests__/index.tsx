import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { FormProvider, useForm } from 'react-hook-form'
import { SearchBar } from '../index'

describe('SearchBar', () => {
    it('should render with placeholder text', () => {
        const Wrapper = ({ children }: { children: React.ReactNode }) => {
            const methods = useForm()

            return <FormProvider {...methods}>{children}</FormProvider>
        }

        render(<SearchBar />, { wrapper: Wrapper })

        const searchInput = screen.getByPlaceholderText('Search')

        expect(searchInput).toBeInTheDocument()
    })
})