export default function UncontrolledFormNoRef() {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Use FormData API to grab values directly
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log("Form Data:", data);
        alert(`Hello ${data.username}, your email is ${data.email}`);
    };

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
                className="border rounded-2xl p-2 my-3"
                name="username"
                placeholder="Username"
            />
            <input
                className="border rounded-2xl p-2 my-3"
                name="email"
                type="email"
                placeholder="Email"
            />
            <button
                className="bg-purple-500 text-white p-1 rounded"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}
