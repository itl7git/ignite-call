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

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState<Availability | null>(null)

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
        setAvailability(response.data)
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
            {availability?.possibleTimes.map((hour) => {
              return (
                <TimepickerItem
                  key={hour}
                  disabled={!availability.availableTimes.includes(hour)}
                >
                  {String(hour).padStart(2, '0')}:00h
                </TimepickerItem>
              )
            })}
          </TimepickerList>
        </Timepicker>
      )}
    </Container>
  )
}
