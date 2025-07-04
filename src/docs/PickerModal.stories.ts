import type { Meta, StoryObj } from '@storybook/react-vite';
import { PickerModal } from '../PickerModal';

const meta = {
  title: 'Generic/PickerModal',
  component: PickerModal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    modalProps: { open: true },
    customProps: {
      onSubmit: () => {},
      onCloseCallback: () => {},
    },
  },
} satisfies Meta<typeof PickerModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {};

export const OpenWithModalProps: Story = {
  args: {
    modalProps: {
      open: true,
      className: 'customize-picker-modal',
      sx: {
        border: '2px solid red',
      },
    }
  },
};

export const OpenWithWeekdays: Story = {
  args: {
    weekdays: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
  },
};
