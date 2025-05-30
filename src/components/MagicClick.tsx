import { Button, Progress } from '@chakra-ui/react'

interface MagicClick {
  text: string
}

const MagicClick = ({ text }: MagicClick): JSX.Element => {
  return <>
    <Button
      onClick={() => console.log('You clicked', text)}
      bg='blue.800'
      color='white'>
      Magic click
      {text}
    </Button>

    <Progress.Root>
      <Progress.Track>
        <Progress.Range aria-valuenow={50} />
      </Progress.Track>
    </Progress.Root>

  </>
}

export default MagicClick
