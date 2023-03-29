/* eslint-disable prettier/prettier */
import React from 'react';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import UpdateForm from './views/base/ncraData/UpdateForm'

describe('update date of ncra nin', () =>{
    it.skip('render fields correctly', async() =>{
        render(<UpdateForm/>)
        expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirm Date')).toBeInTheDocument();
        expect(screen.getByRole("combobox")).toHaveDisplayValue("Select");
        expect( await screen.findByRole('button', {name:/Submit/i})).toBeEnabled();
    
    
    
    })
})
 



