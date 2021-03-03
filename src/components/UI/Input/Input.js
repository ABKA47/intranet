import React from 'react'

const Input = () => {
    let inputElement = null
    const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(coasses.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                style={props.style}
                {...props.elementConfig}
                value={props.value}
                placeholder={props.placeholder}
                ref={props.ref}
                onChange={props.onChange}
            />
            break;
        case ('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                style={props.style}
                {...props.elementConfig}
                value={props.value}
                placeholder={props.placeholder}
                ref={props.ref}
                onChange={props.onChange}
            >
                <option key={props.defaultValue} value={props.defaultValue} disabled>{option.defaultValue}</option>
                <option >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </option>
            </select>
            break;
        case ('date'):
            inputElement = <input
                className={inputClasses.join(' ')}
                style={props.style}
                {...props.elementCongfig}
                value={props.value}
                placeholder={props.placeholder}
                ref={props.ref}
                onChange={props.onChange}
            />
            break;
    }

    return (
        <div>
            {inputElement}
        </div>
    )
}

export default Input