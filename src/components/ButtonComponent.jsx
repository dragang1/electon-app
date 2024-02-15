function ButtonComponent({ label, bgColor, textColor }) {
    return (
        <button
            className={`px-[32px] py-[12px] rounded-full text-[20px]`}
            style={{ backgroundColor: bgColor, color: textColor }}>
            {label}
        </button>
    );
}

export default ButtonComponent;