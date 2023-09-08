import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInput,
  IntervalItem,
  IntervalsContainer,
} from './styles'
import { ArrowRight } from '@phosphor-icons/react'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-Feira</Text>
            </IntervalDay>

            <IntervalInput>
              <TextInput size="sm" type="time" step={60} crossOrigin="" />
              <TextInput size="sm" type="time" step={60} crossOrigin="" />
            </IntervalInput>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </IntervalDay>

            <IntervalInput>
              <TextInput size="sm" type="time" step={60} crossOrigin="" />
              <TextInput size="sm" type="time" step={60} crossOrigin="" />
            </IntervalInput>
          </IntervalItem>
        </IntervalsContainer>

        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
