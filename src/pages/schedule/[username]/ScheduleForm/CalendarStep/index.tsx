import { Calendar } from '@/components/Calendar'
import {
  Container,
  Timepicker,
  TimepickerHeader,
  TimepickerItem,
  TimepickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <Timepicker>
          <TimepickerHeader>
            terça feira <span>20 de setembro</span>
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
