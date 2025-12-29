const Error = ({ error, onRetry }) => {
    return (
        <div className="border border-red-600 p-2 rounded">
            <h3 className="text-xl">{error?.message}</h3>
            <button
                onClick={onRetry}
                className="p-1 bg-yellow-400 text-black cursor-pointer"
            >
                Retry
            </button>
        </div>
    );
};

export default Error;
