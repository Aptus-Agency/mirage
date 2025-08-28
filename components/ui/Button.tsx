export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={`btn-secondary group ${className}`}>
            {children}
            <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
    )
}