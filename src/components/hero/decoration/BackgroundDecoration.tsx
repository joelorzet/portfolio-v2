export function BackgroundDecoration() {
    return (
        <div className="absolute inset-0 z-0">
            <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-indigo-600/10 blur-3xl"></div>
            <div className="absolute w-64 h-64 rounded-full bottom-20 right-10 bg-blue-600/10 blur-3xl"></div>
        </div>
    );
}
