import React from "react";

function Ucomponents ()
{
    function formControll (e)
    {
        e.preventDefault();
    }
    return (
        <div>

            <h1>
                Uncontrolled components
            </h1>

            <h2>
                <form onSubmit={formControll}>
                    Input feild 1 - <input type="text" /> <br /> <br />
                    Input feild 2 - <input type="text" /> <br /> <br />
                    Submit here - <button>Submit</button>
                </form>
            </h2>
        </div>
    );
}

export default Ucomponents;