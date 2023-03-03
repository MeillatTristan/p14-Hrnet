import Modal from 'modal-component-hrnet/Modal';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actions/userAction';




function FormCreateEmployee(props) {
    const [valueBirth, onChangeBirth] = useState(new Date());
    const [valueStart, onChangeStart] = useState(new Date());
    const [isOpen, onChangeOpen] = useState(false);
    const optionsState = [
        {
            "label": "Alabama",
            "value": "AL"
        },
        {
            "label": "Alaska",
            "value": "AK"
        },
        {
            "label": "American Samoa",
            "value": "AS"
        },
        {
            "label": "Arizona",
            "value": "AZ"
        },
        {
            "label": "Arkansas",
            "value": "AR"
        },
        {
            "label": "California",
            "value": "CA"
        },
        {
            "label": "Colorado",
            "value": "CO"
        },
        {
            "label": "Connecticut",
            "value": "CT"
        },
        {
            "label": "Delaware",
            "value": "DE"
        },
        {
            "label": "District Of Columbia",
            "value": "DC"
        },
        {
            "label": "Federated States Of Micronesia",
            "value": "FM"
        },
        {
            "label": "Florida",
            "value": "FL"
        },
        {
            "label": "Georgia",
            "value": "GA"
        },
        {
            "label": "Guam",
            "value": "GU"
        },
        {
            "label": "Hawaii",
            "value": "HI"
        },
        {
            "label": "Idaho",
            "value": "ID"
        },
        {
            "label": "Illinois",
            "value": "IL"
        },
        {
            "label": "Indiana",
            "value": "IN"
        },
        {
            "label": "Iowa",
            "value": "IA"
        },
        {
            "label": "Kansas",
            "value": "KS"
        },
        {
            "label": "Kentucky",
            "value": "KY"
        },
        {
            "label": "Louisiana",
            "value": "LA"
        },
        {
            "label": "Maine",
            "value": "ME"
        },
        {
            "label": "Marshall Islands",
            "value": "MH"
        },
        {
            "label": "Maryland",
            "value": "MD"
        },
        {
            "label": "Massachusetts",
            "value": "MA"
        },
        {
            "label": "Michigan",
            "value": "MI"
        },
        {
            "label": "Minnesota",
            "value": "MN"
        },
        {
            "label": "Mississippi",
            "value": "MS"
        },
        {
            "label": "Missouri",
            "value": "MO"
        },
        {
            "label": "Montana",
            "value": "MT"
        },
        {
            "label": "Nebraska",
            "value": "NE"
        },
        {
            "label": "Nevada",
            "value": "NV"
        },
        {
            "label": "New Hampshire",
            "value": "NH"
        },
        {
            "label": "New Jersey",
            "value": "NJ"
        },
        {
            "label": "New Mexico",
            "value": "NM"
        },
        {
            "label": "New York",
            "value": "NY"
        },
        {
            "label": "North Carolina",
            "value": "NC"
        },
        {
            "label": "North Dakota",
            "value": "ND"
        },
        {
            "label": "Northern Mariana Islands",
            "value": "MP"
        },
        {
            "label": "Ohio",
            "value": "OH"
        },
        {
            "label": "Oklahoma",
            "value": "OK"
        },
        {
            "label": "Oregon",
            "value": "OR"
        },
        {
            "label": "Palau",
            "value": "PW"
        },
        {
            "label": "Pennsylvania",
            "value": "PA"
        },
        {
            "label": "Puerto Rico",
            "value": "PR"
        },
        {
            "label": "Rhode Island",
            "value": "RI"
        },
        {
            "label": "South Carolina",
            "value": "SC"
        },
        {
            "label": "South Dakota",
            "value": "SD"
        },
        {
            "label": "Tennessee",
            "value": "TN"
        },
        {
            "label": "Texas",
            "value": "TX"
        },
        {
            "label": "Utah",
            "value": "UT"
        },
        {
            "label": "Vermont",
            "value": "VT"
        },
        {
            "label": "Virgin Islands",
            "value": "VI"
        },
        {
            "label": "Virginia",
            "value": "VA"
        },
        {
            "label": "Washington",
            "value": "WA"
        },
        {
            "label": "West Virginia",
            "value": "WV"
        },
        {
            "label": "Wisconsin",
            "value": "WI"
        },
        {
            "label": "Wyoming",
            "value": "WY"
        }
    ];
    const optionsDepartement = [
        {
            "label": "Sales",
            "value": "Sales"
        },
        {
            "label": "Marketing",
            "value": "Marketing"
        },
        {
            "label": "Engineering",
            "value": "Engineering"
        },
        {
            "label": "Human Resources",
            "value": "Human Resources"
        },
        {
            "label": "Legal",
            "value": "Legal"
        }
    ]
    const [selectedOptionState, setSelectedOptionState] = useState(null);
    const [selectedOptionDepartement, setSelectedOptionDepartement] = useState(null);

    const formPreventDefault = (e) => {
        e.preventDefault();
    }

    const dispatch = useDispatch()

    const saveEmployee = () => {
        onChangeOpen(false);
        setTimeout((e) => {
            const firstName = document.getElementById('first-name');
            const lastName = document.getElementById('last-name');
            const dateOfBirth = valueBirth;
            const startDate = valueStart;
            const department = selectedOptionDepartement
            const street = document.getElementById('street');
            const city = document.getElementById('city');
            const state = selectedOptionState;
            const zipCode = document.getElementById('zip-code');

            const employees = JSON.parse(localStorage.getItem('employees')) || [];

            const employee = {
                firstName: firstName.value,
                lastName: lastName.value,
                dateOfBirth: dateOfBirth,
                startDate: startDate,
                department: department.value,
                street: street.value,
                city: city.value,
                state: state.value,
                zipCode: zipCode.value
            };
            console.log(employee);
            employees.push(employee);
            dispatch(addUser(employee));
            localStorage.setItem('employees', JSON.stringify(employees));
            
            onChangeOpen(true);
        }, 100)
    }


    return (
        <form onSubmit={formPreventDefault} className='form'>
            <div className='formGroup'>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />
            </div>
            <div className='formGroup'>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />
            </div>
            <div className='formGroup'>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker id="date-of-birth" onChange={onChangeBirth} value={valueBirth} required={true} />
            </div>
            <div className='formGroup'>
                <label htmlFor="start-date">Start Date</label>
                <DatePicker id="start-date" onChange={onChangeStart} value={valueStart} required={true} />
            </div>
            <fieldset className="address">
                <legend>Address</legend>

                <div className='formGroup'>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />
                </div>
                <div className='formGroup'>
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />
                </div>
                <div className='formGroup'>
                    <label htmlFor="state">State</label>
                    <Select
                        defaultValue={selectedOptionState}
                        onChange={setSelectedOptionState}
                        options={optionsState}
                        isSearchable={true}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        id="state"
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </div>
            </fieldset>

            <div className='formGroup'>
                <label htmlFor="department">Department</label>
                <Select
                    defaultValue={selectedOptionDepartement}
                    onChange={setSelectedOptionDepartement}
                    options={optionsDepartement}
                    isSearchable={true}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    id="department"
                />
            </div>
            <div className='containerSubmit'>
                <button className='submitButton' onClick={saveEmployee}>
                    Save
                </button>
                <Modal
                    id="saveButton"
                    text="Employee Created!"
                    type='submit'
                    textButton="Save"
                    open={isOpen}
                />
            </div>

        </form>
    );
}

export default FormCreateEmployee;