export const Box = ({ children }) => {
    return (
        <div className="w-full h-full d-center px-4 sm:px-0">
            <div className="auth-box">
                {children}
            </div>
        </div>
    )
};