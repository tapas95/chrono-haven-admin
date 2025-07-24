const Button = props => {
    const buttonDefaultClass = `px-6 py-4 bg-primary text-sm leading-none font-semibold text-white uppercase border border-primary border-primary rounded-md hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out`;
    return(
        <button type={ props.type } className={ props.className ? `${ buttonDefaultClass } ${ props.className }` : buttonDefaultClass.trim() } onClick={ props.onClick }>{ props.children }</button>
    )
}
export default Button;