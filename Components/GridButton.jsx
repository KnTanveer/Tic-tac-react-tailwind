export function GridButton({ value, onSquareClick }) {
    return <button className="square text-[24px] border bg-transparent w-[32px] h-[32px]"
        onClick={onSquareClick}
    >
        {value}
    </button>
}