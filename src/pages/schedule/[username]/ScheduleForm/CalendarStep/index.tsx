import { Calendar } from '@/components/Calendar'
import {
  Container,
  Timepicker,
  TimepickerHeader,
  TimepickerItem,
  TimepickerList,
} from './styles'
import { useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

interface CalendarStepsProps {
  onSelectDateTime: (date: Date) => void
}

export function CalendarStep({ onSelectDateTime }: CalendarStepsProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const { data: availability } = useQuery<Availability>(
    ['availability', selectedDateWithoutTime],
    async () => {
      const response = await api.get(`/users/${username}/availability`, {
        params: {
          date: selectedDateWithoutTime,
          timezoneOffset: selectedDate ? selectedDate.getTimezoneOffset() : 0,
        },
      })

      return response.data
    },
    {
      enabled: !!selectedDate,
    },
  )

  const unavailableTimes = availability?.availableTimes.map((availableTime) => {
    return dayjs(availableTime).get('hour')
  })

  function handleSelectTime(hour: number) {
    const dateWithTime = dayjs(selectedDate)
      .set('hour', hour)
      .startOf('hour')
      .toDate()

    onSelectDateTime(dateWithTime)
  }

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
                  onClick={() => handleSelectTime(hour)}
                  disabled={
                    unavailableTimes?.includes(hour) ||
                    dayjs(selectedDate).set('hour', hour).isBefore(new Date())
                  }
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
