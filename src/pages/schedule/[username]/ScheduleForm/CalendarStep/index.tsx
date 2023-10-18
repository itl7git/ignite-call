import { Calendar } from '@/components/Calendar'
import {
  Container,
  Timepicker,
  TimepickerHeader,
  TimepickerItem,
  TimepickerList,
} from './styles'
import { useState } from 'react'
import { date } from 'zod'
import dayjs from 'dayjs'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <Timepicker>
          <TimepickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimepickerHeader>

          <TimepickerList>
            <TimepickerItem>08:00h</TimepickerItem>
            <TimepickerItem>09:00h</TimepickerItem>
            <TimepickerItem>10:00h</TimepickerItem>
            <TimepickerItem>11:00h</TimepickerItem>
            <TimepickerItem>12:00h</TimepickerItem>
            <TimepickerItem>13:00h</TimepickerItem>
            <TimepickerItem>14:00h</TimepickerItem>
            <TimepickerItem>15:00h</TimepickerItem>
            <TimepickerItem>16:00h</TimepickerItem>
            <TimepickerItem>17:00h</TimepickerItem>
            <TimepickerItem>18:00h</TimepickerItem>
          </TimepickerList>
        </Timepicker>
      )}
    </Container>
  )
}
