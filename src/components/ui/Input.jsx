import { useState } from "react";
import Button from "./Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const InputText = props => {
    const defaultInputFieldClass = `${ props.type === 'password' ? 'pl-4 pr-12' : 'px-4' } dark:bg-gray-900 text-sm dark:text-gray-400 py-3 w-full border border-solid border-gray-300 dark:border-gray-800 outline-none rounded-md focus:border-primary`;
    let [ passwordIsVisible, setPasswordIsVisible ] = useState( false );
    const handlePasswordVisibility = () =>  setPasswordIsVisible( passwordIsVisible = !passwordIsVisible );
    if( props.type === 'password' ){
        return(
            <div className={ props.containerClass ? `mb-4 ${ props.containerClass }` : 'mb-4'.trim() }>
                <label htmlFor={ props.id } className="block text-sm font-medium dark:text-gray-400 mb-2">{ props.label } { props.required && <span className="text-red-600">*</span> }</label>
                <div className="relative">
                    <input type={ passwordIsVisible ? 'text' : props.type } id={ props.id } name={ props.name } className={ props.className ? `${ defaultInputFieldClass } ${ props.className }` : defaultInputFieldClass.trim() } placeholder={ props.placeholder } value={ props.value } onChange={ props.onChange } />
                    <Button type="button" className="!bg-transparent !p-0 !text-primary !border-0 absolute top-1/2 right-4 cursor-pointer -translate-y-1/2" onClick={ handlePasswordVisibility }>
                        { passwordIsVisible ? <FaEye size={ 16 } /> : <FaEyeSlash size={ 16 } /> }
                    </Button>
                </div>
            </div>
        )   
    } else if( props.type === 'checkbox' ){
        return(
            <div className={ props.containerClass ? `mb-4 ${ props.containerClass }` : 'mb-4'.trim() }>
                <label htmlFor={ props.id } className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <input type="checkbox" id={ props.id } name={ props.id } className={ props.className ? `dark:bg-gray-900 ${ props.className }` : 'dark:bg-gray-900'.trim() } />
                    <span className="block">{ props.label }</span>
                </label>
            </div>
        )
    } else{
        return(
            <div className={ props.containerClass ? `mb-4 ${ props.containerClass }` : 'mb-4'.trim() }>
                <label htmlFor={ props.id } className="block text-sm font-medium dark:text-gray-400 mb-2">{ props.label } { props.required && <span className="text-red-600">*</span> }</label>
                <input type={ props.type } id={ props.id } name={ props.name } className={ props.className ? `${ defaultInputFieldClass } ${ props.className }` : defaultInputFieldClass.trim() } placeholder={ props.placeholder } value={ props.value } onChange={ props.onChange } />
            </div>
        )
    }
    
}
export default InputText;