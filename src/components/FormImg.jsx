import React from 'react'
import PropTypes from 'prop-types'

function FormImg({handleSubmit}) {
    return (
        <>
             <form onSubmit={handleSubmit}>
            <div>
                <label className="w-75 text-center  p-2 mt-3">
                    {" "}
                    Buscar: <input className="text-center"  type="text" name="inputText"/><button className="btn btn-warning mx-2" type="submit"><span className="material-icons">
                        search
                        </span></button>
                </label> {""}

            </div>
                
        </form>
        </>
    )
}

FormImg.propTypes = {
    handleSubmit: PropTypes.func,
}

export default FormImg

