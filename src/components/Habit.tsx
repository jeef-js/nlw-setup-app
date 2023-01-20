interface HabitProps {
  info: string
}

export function Habit(props: HabitProps) {
  return(
    <p>{props.info}</p>
  )
}