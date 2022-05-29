import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const [department, setDepartment] = useState('');
    const [blood, setBlood] = useState('');
    const [contact, setContact] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !age || !department || !blood || !contact) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            age,
            department,
            blood,
            contact
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${age}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="age">age</label>
                <input
                    id="age"
                    type="number"
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;