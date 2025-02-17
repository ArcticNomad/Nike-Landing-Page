// eslint-disable-next-line react/prop-types
export default function Button({label, iconURL, backgroundColor,textColor, borderColor,fullWidth}) {
    return(
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full button-hover

        ${
            backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "bg-coral-red text-white border-coral-red"

            } rounded-full ${fullWidth && "w-full"}`}

        >
            {label}
            {iconURL &&(
                <img src={iconURL} alt="icon"/>
            )}
        </button>
    )
}