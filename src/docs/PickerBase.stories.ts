import type { Meta, StoryObj } from '@storybook/react-vite';
import { PickerBase } from '../PickerBase';

const meta = {
  title: 'Generic/PickerBase',
  component: PickerBase,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof PickerBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
