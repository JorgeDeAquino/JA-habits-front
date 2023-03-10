interface HabitProps {
    complited: number
}

export function Habit(props: HabitProps) {
    return (
        <div className="bg-zinc-900 w-10 text-white rounded m-2 flex item-center justify-center">
            {props.complited}
        </div>
    )
}