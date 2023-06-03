import clsx from 'clsx';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, fullWidth, children, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex justify-center rounded-full mx-16 my-2 font-raleway text-base
        `,
        fullWidth && 'w-full',
        type === 'submit' && 'bg-black text-white',
        type === 'submit' && disabled && 'bg-white text-black opacity-50 cursor-default',
            
        )}
        >
            {children}
        </button>
    )
}

export default Button;