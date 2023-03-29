/* eslint-disable prettier/prettier */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import AddUsers from './views/base/crud/AddUsers'

describe('Add users', () =>{
    it.skip('renders input fields for create users', () => {
        render(<AddUsers />);
        expect(screen.getByPlaceholderText('OSL_20ITN_190')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('23279366751')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('name@gmail.com')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enoch!@222F')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('******')).toBeInTheDocument();
     
      });


      it.skip('handles input changes correctly', () => {
        render(<AddUsers />);
       const emailInput = screen.getByPlaceholderText('name@gmail.com');
       const nameInput = screen.getByPlaceholderText('Name');
       const idInput = screen.getByPlaceholderText('OSL_20ITN_190');
       const phoneInput = screen.getByPlaceholderText('23279366751');
       const passwordInput = screen.getByPlaceholderText('Enoch!@222F');
       const confInput = screen.getByPlaceholderText('******');
    
       fireEvent.change(emailInput, { target: { value: 'men270992@gmail.com' } });
       fireEvent.change(nameInput, { target: { value: 'Musa' } });
       fireEvent.change(idInput, { target: { value: 'osl123el' } });
       fireEvent.change(phoneInput, { target: { value: '23278123123' } });
       fireEvent.change(passwordInput, { target: { value: '123456Ab@' } });
       fireEvent.change(confInput, { target: { value: '123456Ab@' } });
    
       expect(emailInput.value).toBe('men270992@gmail.com');
       expect(nameInput.value).toBe('Musa');
       expect(idInput.value).toBe('osl123el');
       expect(phoneInput.value).toBe('23278123123');
       expect(passwordInput.value).toBe('123456Ab@');
       expect(confInput.value).toBe('123456Ab@');
    
     });
    
    
     test.skip('submit a user when all input are field in', () =>{
        render(<AddUsers/>)
    
        const st =screen.getByPlaceholderText('OSL_20ITN_190')
        const na =screen.getByPlaceholderText('Name')
        const el = screen.getByPlaceholderText('name@gmail.com')
        const pas = screen.getByPlaceholderText('Enoch!@222F');
        const conf =screen.getByPlaceholderText('******')
        const role =screen.getByPlaceholderText('23279366751')
    
        fireEvent.change(st, { target: { value: "osl123el" } });
        fireEvent.change(na, { target: { value: "Musa" } });
        fireEvent.change(el, { target: { value: "men270992@gmail.com" } });
        fireEvent.change(pas, { target: { value: "123456Ab@" } });
        fireEvent.change(conf, { target: { value: "123456Ab@" } });
        fireEvent.change(role, { target: { value: "23278123123" } });
    
        expect(st.value).toBe("osl123el")
        expect(na.value).toBe("Musa")
        expect(el.value).toBe("men270992@gmail.com")
        expect(pas.value).toBe("123456Ab@")
        expect(conf.value).toBe("123456Ab@")
        expect(role.value).toBe("23278123123")
        fireEvent.click(screen.getByText(/Save User/i));
    
    
      })
    
    
})



