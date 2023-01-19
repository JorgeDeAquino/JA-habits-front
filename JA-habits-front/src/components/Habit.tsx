import './Habit.css'

interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return(
        <div className="habit">Habit {props.completed}</div>
    )
}