const Error = ({ error }) => {
    return (
        <div className="border border-red-600 p-2 rounded">
            <h3 className="text-xl">{error?.message}</h3>
            <p className="text-xs">Please refresh the page.</p>
        </div>
    );
};

export default Error;
