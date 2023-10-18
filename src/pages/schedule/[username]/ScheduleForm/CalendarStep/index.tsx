import { Calendar } from '@/components/Calendar'
import {
  Container,
  Timepicker,
  TimepickerHeader,
  TimepickerItem,
  TimepickerList,
} from './styles'
import { useEffect, useState } from 'react'
import { date } from 'zod'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)

  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((response) => {
        console.log(response.data)
      })
  }, [selectedDate, username])

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
