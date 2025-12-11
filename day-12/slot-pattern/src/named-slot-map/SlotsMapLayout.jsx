export default function SlotsMapLayout({ slots = {} }) {
    return (
        <div className="flex gap-12 border p-2 border-white">
            <aside>{slots.sidebar}</aside>
            <main className="border p-2 border-white">
                <header>{slots.header}</header>
                <section className="mt-3">{slots.content}</section>
                <footer className="mt-3">{slots.footer}</footer>
            </main>
        </div>
    );
}
