import { Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
} as Meta

export const Basic = ({
  title,
  description,
  ...args
}: {
  title: string
  description: string
}) => <Main title={title} description={description} {...args} />
