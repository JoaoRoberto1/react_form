function Button( { ButtonName, ButtonColor, ButtonType } ) {
    return (
        <>
            <div className="d-grid gap-2 col-2">
                <button type={ButtonType} className={ButtonColor}>{ButtonName}</button>
            </div>
        </>
    )
    
}

export default Button;