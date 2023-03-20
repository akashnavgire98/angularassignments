import React from "react";

import "./RegistrationForm.css";

const RegistrationForm = () => {
    return(
        <div className="Container">
            <form>
                <div>
                <label type="text">Enter Name : </label>
                <input type="text" />
                </div><br/>

                <div>
                <label type="email">Enter Mail : </label>
                <input type="email" />
                </div><br/>

                <div>
                <label type="password">Enter Password : </label>
                <input type="password" />
                </div><br/>

                <div>
                    <button>sign up</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;