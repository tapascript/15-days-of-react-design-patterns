function StatsWidget() {
    if (Math.random() > 0.5) {
        throw new Error("Stats service crashed");
    }

    return (
        <div className="flex flex-col m-2 border border-white p-2 rounded">
            <h2 className="text-3xl">Stats</h2>
            <p className="text-xl text-gray-400">Visitors today: 1243</p>
        </div>
    );
}

export default StatsWidget;
