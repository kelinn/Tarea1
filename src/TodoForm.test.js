import React from 'react'
import {fireEvent, render, waitForElement} from '@testing-library/react'

import { TodoForm } from "./TodoForm";


describe('Tests for TodoForm', () => {
    it('Should not add new text when form has been submitted if its empty', async() => {
        //renderizar component
        const {getByTestId} = render(<TodoForm/>)
        const fieldNode = await waitForElement(
            ()=> getByTestId('form-field')
        )
        //input
        const newText = 'testing'
        fireEvent.change(
            fieldNode,
            {target:{value: newText}}
        )
        expect(fieldNode.value).toEqual('')
        //button
        // const btnNode = await waitForElement(
        //     () => getByTestId('form-btn')
        // )
        // fireEvent.click(btnNode)

        // const tableNode = await waitForElement(
        //     () => getByTestId('table')
        // )
    })
   

})
describe('Tests for TodoForm', () => {
    it('Should add update text when form has been submitted', async() => {
        //renderizar component
        const {getByTestId} = render(<TodoForm/>)
        const fieldNode = await waitForElement(
            ()=> getByTestId('form-field')
        )
        //input
        const newText = 'testing'
        fireEvent.change(
            fieldNode,
            {target:{value: newText}}
        )
        expect(fieldNode.value).toEqual(newText)
    
    })
   

})
describe('Tests for TodoForm', () => {
    it('Should add update text when form has been submitted', async() => {
        //renderizar component
        const {getByTestId} = render(<TodoForm/>)
        const fieldNode = await waitForElement(
            ()=> getByTestId('form-field')
        )
        //input
        const newText = 'testing'
        fireEvent.change(
            fieldNode,
            {target:{value: newText}}
        )
        expect(fieldNode.value).toEqual(newText)
    
    })
   

})