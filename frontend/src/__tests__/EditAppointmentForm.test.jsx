/* eslint-disable no-undef */
/// <reference types="vitest" />

import { render, screen } from '@testing-library/react';
import EditAppointmentForm from '../admin/components/EditAppointmentForm';

// eslint-disable-next-line no-undef
describe('EditAppointmentForm', () => {
  it('renders the form title', () => {
    render(<EditAppointmentForm
      updateName="" setUpdateName={() => {}} 
      nameError=""
      updateEmail="" setUpdateEmail={() => {}} 
      emailError=""
      updatePhone="" setUpdatePhone={() => {}} 
      phoneError=""
      updateDetails="" setUpdateDetails={() => {}} 
      detailsError=""
      selectedDateTime={new Date()} setSelectedDateTime={() => {}} 
      appointments={[]} selectedAppointment={{}} handleUpdateAppointment={() => {}}
    />);
    
    expect(screen.getByText(/Edit Appointment details/i)).toBeInTheDocument();
  });
});
