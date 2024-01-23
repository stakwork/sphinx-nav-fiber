import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SettingsView } from '../../index';

// Mock the useUserStore and useAppStore hooks
import * as useUserStoreModule from "../../../../../stores/useUserStore";

jest.mock('~/stores/useUserStore');
jest.mock('~/stores/useAppStore');

describe('SettingsView Component', () => {
    test('renders SettingsView component correctly for non-admin user', async () => {
        // Mock useUserStore implementation for this test
        const isAdminMock = jest.fn(() => [false]);

        useUserStoreModule.useUserStore.mockImplementation(isAdminMock);

        render(<SettingsView onClose={() => {
            // intentionally left empty
        }} />);

        (async () => {
            await waitFor(() => {
                expect(screen.getByText('General')).toBeInTheDocument();
                expect(screen.getByText('Appearance')).toBeInTheDocument();
                expect(screen.queryByText('User Permissions')).toBeNull();
            });
        })();
    });

    test('renders SettingsView component correctly for admin user', () => {
        // Mock useUserStore implementation for this test
        const isAdminMock = jest.fn(() => [true]);

        useUserStoreModule.useUserStore.mockImplementation(isAdminMock);

        render(<SettingsView onClose={() => {
            // intentionally left empty
        }} />);

        expect(screen.getByText('General')).toBeInTheDocument();
        expect(screen.getByText('Appearance')).toBeInTheDocument();
        expect(screen.getByText('User Permissions')).toBeInTheDocument();
    });

    test('handles interaction of switching tabs', () => {
        // Mock useUserStore implementation for this test
        const isAdminMock = jest.fn(() => [true]);

        useUserStoreModule.useUserStore.mockImplementation(isAdminMock);

        render(<SettingsView onClose={() => {
            // intentionally left empty
        }} />);

        fireEvent.click(screen.getByText('Appearance'));

        expect(screen.getByText('Appearance')).toHaveClass('Mui-selected');

        fireEvent.click(screen.getByText('User Permissions'));

        expect(screen.getByText('User Permissions')).toHaveClass('Mui-selected');
    });
});
