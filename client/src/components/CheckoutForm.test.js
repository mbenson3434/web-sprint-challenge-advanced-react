import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //access header either by text or add testid
    const header = screen.getByTestId('header');
    expect(header).toBeOnTheDocument();

});

test("form shows success message on submit with form details", async () => {
    //access all form inputs
    const firstName = screen.getByText(/first name/i);
    const lastName = screen.getByText(/last name/i);
    const address = screen.getByText(/address/i);
    const city = screen.getByText(/city/i);
    const theState = screen.getByText(/state/i);
    const zipCode = screen.getByText(/zip/i);
    const submit = screen.getByRole(button);
    //fire events on form inputs
    fireEvent.change(firstName,{target: {value: 'Meghann', name:'firstName'}});
    fireEvent.change(lastName,{target: {value: 'Benson', name:'lastName'}});
    fireEvent.change(address,{target: {value: '123 Lala Lane', name:'address'}});
    fireEvent.change(city,{target: {value: 'Rooville', name:'city'}});
    fireEvent.change(theState,{target: {value: 'WA', name:'state'}});
    fireEvent.change(zipCode,{target: {value: '12345', name:'zip'}});
    //Press submit button making sure success box renders
    await waitFor(() => {
        fireEvent.click(submit);
        const success = screen.getByTestId('successMessage');
        expect(success).toBeInTheDocument();
      })
});
