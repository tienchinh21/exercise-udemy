import { useState } from "react";
const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10,
}
const userInput = (props) => {

    const [InputUser, setInputUser] = useState(initialUserInput);
    const submitHandler = (e) => {
        e.preventDefault();
        props.onCalculator(InputUser);
    };
    const resetHandler = () => {
        setInputUser(initialUserInput);
    };
    const InputChangHandler = (input, value) => {
        setInputUser((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            }
        });
    };
    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(e) => InputChangHandler('current-savings', e.target.value)} value={InputUser['current-savings']} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(e) => InputChangHandler('yearly-contribution', e.target.value)} value={InputUser['yearly-contribution']} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(e) => InputChangHandler('expected-return', e.target.value)} value={InputUser['expected-return']} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(e) => InputChangHandler('duration', e.target.value)} value={InputUser['duration']} type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
};
export default userInput;