import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [age, setAge] = useState(selectedEmployee.age);
    const [department, setDepartment] = useState(selectedEmployee.department);
    const [blood, setBlood] = useState(selectedEmployee.blood);
    const [contact, setContact] = useState(selectedEmployee.contact);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !age || !department || !blood || !contact) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            age,
            department,
            blood,
            contact
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.age}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="text"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <label htmlFor="department">Department</label>
                <input
                    id="department"
                    type="text"
                    name="department"
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                />
                <label htmlFor="blood">Bloodgroup</label>
                <input
                    id="blood"
                    type="text"
                    name="blood"
                    value={blood}
                    onChange={e => setBlood(e.target.value)}
                />
                <label htmlFor="contact">Contact Number</label>
                <input
                    id="contact"
                    type="number"
                    name="contact"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit