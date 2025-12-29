const Error = () => {
    return (
        <div className="border border-red-600 p-2 rounded">
            <h3 className="text-xl">Stats failed to load</h3>
            <p className="text-xs">Please refresh the page.</p>
        </div>
    );
};

export default Error;
