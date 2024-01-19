import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { General } from '../../index';
import { postAboutData } from '~/network/fetchSourcesData';
import { useAppStore } from '~/stores/useAppStore';
import * as fetchSourcesDataModule from '~/network/fetchSourcesData';

jest.mock('~/network/fetchSourcesData');
jest.mock('~/stores/useAppStore');

describe('General', () => {
    const mockSetAppMetaData = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();

        useAppStore.mockReturnValue({
            setAppMetaData: mockSetAppMetaData,
        });
    });

    it('should render General component with initial form values', () => {
        const initialValues = {
            title: 'Test Title',
            description: 'Test Description',
            mission_statement: 'Test Mission Statement',
            search_term: 'Test Search Term',
        };

        render(<General initialValues={initialValues} />);

        expect(screen.getByLabelText(/graph title/i)).toHaveValue(initialValues.title);
        expect(screen.getByLabelText(/graph description/i)).toHaveValue(initialValues.description);
        expect(screen.getByLabelText(/mission statement/i)).toHaveValue(initialValues.mission_statement);
        expect(screen.getByLabelText(/search term/i)).toHaveValue(initialValues.search_term);
    });

    it('should call postAboutData on form submission', async () => {
        const postAboutDataSpy = jest.spyOn(fetchSourcesDataModule, 'postAboutData');

        render(<General initialValues={{}} />);

        await fireEvent.click(screen.getByRole('button', { name: /save changes/i }));

        (async () => {
            await waitFor(() => {
                expect(postAboutDataSpy).toHaveBeenCalled();
            });
        })();
    });

    it('should update app metadata on successful form submission', async () => {
        fetchSourcesDataModule.postAboutData.mockResolvedValue({ status: 'success' });

        render(<General initialValues={{}} />);

        await fireEvent.click(screen.getByRole('button', { name: /save changes/i }));

        (async () => {
            await waitFor(() => expect(mockSetAppMetaData).toHaveBeenCalled());
        })();

    });

    it('should handle error case for postAboutData', async () => {
        const mockConsoleWarn = jest.spyOn(console, 'warn');

        postAboutData.mockRejectedValue(new Error('Test error'));

        render(<General initialValues={{}} />);

        await fireEvent.click(screen.getByRole('button', { name: /save changes/i }));

        (async () => {
            await waitFor(() => expect(mockConsoleWarn).toHaveBeenCalledWith(expect.any(Error)));
        })

        mockConsoleWarn.mockRestore();
    });

    it('should show loading state when isSubmitting is true', async () => {
        render(<General initialValues={{}} />);

        userEvent.type(screen.getByLabelText(/graph title/i), 'Test Title');
        await fireEvent.click(screen.getByRole('button', { name: /save changes/i }));

        (async () => {
            await waitFor(() => expect(screen.getByTestId('submit-loader')).toBeInTheDocument());
        })();

    });
});
