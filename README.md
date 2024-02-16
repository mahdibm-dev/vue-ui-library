## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### run storybook

```sh
npm run storybook
```

### build storybook

```sh
npm run build-storybook
```

### run the storybook build

```sh
npx http-server path-to-storybook-static
```

View your Storybook at https://65cea36996bcaa47132920fb-tjjwkuzeax.chromatic.com/

# Button Component Documentation

## Overview

This document provides comprehensive guidance on how to utilize the custom Vue 3 button component within your projects. The component is designed for flexibility and ease of use, offering a variety of styles, colors, sizes, and rounded corner options.

## Usage

```sh
<script setup lang="ts">
import Button from '@/components/v-button.vue'
</script>

<template>
  <Button variant="solid" color="primary" size="md" rounded="lg">
    Click Me
  </Button>
</template>
```
## Props

The button component accepts several props that allow you to customize its appearance and functionality. Below is a detailed list of these props:

- **`variant`**: `String` - Defines the button's visual style. Options are `solid`, `outline`, and `ghost`, with `solid` being the default. This prop alters the fundamental look of the button, offering filled, bordered, or transparent styles.

- **`color`**: `String` - Determines the color scheme of the button. Available choices are `primary`, `secondary`, `success`, `info`, and `error`. The default is `primary`. This prop is used to convey different semantic meanings or to match the button with your application's design theme.

- **`size`**: `String` - Specifies the size of the button. Possible values are `xs`, `sm`, `md`, `lg`, `full`, and `fit`, with `lg` set as the default size. This prop helps ensure the button fits well within various UI contexts or emphasizes its importance relative to other elements.

- **`rounded`**: `String` | `Boolean` - Controls the border radius of the button, affecting how rounded its corners are. Options include `md`, `lg`, `xl`, `2xl`, `3xl`, a boolean `false` for no rounding, or `true` which defaults to `3xl`. The default is `3xl`, making the button highly rounded.

- **`disabled`**: `Boolean` - If set to `true`, the button will be disabled and non-interactive. This is useful for preventing user actions under certain conditions. The default value is `false`.

- **`class`**: `HTMLAttributes['class']` - Allows you to apply additional custom CSS classes to the button for further styling customization. The default is an empty string, meaning no additional classes are applied unless specified.

# Input Component Documentation

## Overview

This document outlines the usage of a custom Vue 3 input component. This component is designed for flexibility, supporting various input types such as text, password, and number. It incorporates features for displaying error states and customizing appearance.

## Props

The input component accepts the following props for customization:

- **`label`**: `String` - Optional label text for the input. Default is an empty string.

- **`modelValue`**: `String` - The value for v-model binding, allowing the component to be used with Vue's two-way data binding. Default is an empty string.

- **`type`**: `String` - Specifies the type of input (`text`, `password`, `number`). Default is `text`. This allows the component to be reused for different data input types.

- **`placeholder`**: `String` - Text to display when the input is empty, guiding the user on what to enter. Default is `"type here"`.

- **`error`**: `Boolean` - Indicates whether the input is in an error state. If `true`, the input's styling changes to reflect the error, and `errorText` is displayed. Default is `false`.

- **`errorText`**: `String` - The message to display when the input is in an error state. This text is only shown if `error` is `true`. Default is an empty string.

- **`disabled`**: `Boolean` - If `true`, the input is disabled and cannot be interacted with. This is useful for controlling access to the input based on certain conditions. Default is `false`.

- **`class`**: `HTMLAttributes['class']` - Additional CSS classes that can be applied to the input for further customization. Default is an empty string.

## Usage

To use this input component within your Vue application, import and declare it in your component:

```vue
<script setup lang="ts">
import Input from '@/components/v-input.vue'
</script>

<template>
  <Input
    label="Username"
    modelValue="JohnDoe"
    placeholder="Enter your username"
    type="text"
    :error="hasError"
    errorText="Username is required"
  />
</template>
```
# Modal Component Documentation

## Overview

This Vue 3 modal component allows for displaying content in a modal overlay, with functionality to close the modal by clicking outside or through a dedicated close button. It utilizes Vue's Composition API and `@vueuse/core` for enhanced interaction capabilities.

## Dependencies

Make sure `@vueuse/core` is installed in your project:

```bash
npm install @vueuse/core
# or using Yarn
yarn add @vueuse/core
```
Component Usage
To integrate the modal into your Vue application, import and declare it within your component:
```vue
<script setup>
import Modal from '@/components/v-modal.vue'
import { ref } from 'vue'
const open = ref(false)
function closeModal() {
  open.value = false
}
</script>

<template>
  <Modal v-if="open" @close="closeModal">
      <template v-slot:title>
        <h1>title</h1>
      </template>
      <template v-slot:content> body </template>
      <template v-slot:actions>
          <button @click="handleClick">cancel</button>
      </template>
    </Modal>
</template>
```
## Slots

The modal component is designed with flexibility in mind, providing slots for easy customization of its content:

- **`title`**: Use this slot to insert a custom title in the modal's header. Ideal for dynamic headings based on modal context.
- **`content`**: Dedicated to the body content of the modal. This slot can house text, forms, images, or any custom content suitable for your modal's purpose.
- **`actions`**: Reserved for action elements such as buttons. This is where you place controls for submitting form data or closing the modal.

## Features

- **Dynamic Interaction**: Built with Vue's Composition API and `@vueuse/core` for a responsive and interactive user experience.
- **Click Outside to Close**: Leverages `@vueuse/core`'s `onClickOutside` hook to detect and respond to clicks outside the modal, providing a seamless way to close the modal without interacting with its content directly.
- **Close Button**: Includes a pre-styled close button within the modal's header, allowing users to easily exit the modal. This button can be customized or replaced within the `title` slot as needed.

## Styling

The modal component utilizes Tailwind CSS for styling, ensuring a modern and responsive appearance. Key styling features include:

- **Responsive Design**: The modal is fully responsive, designed to center itself on the screen across different devices and screen sizes.
- **Customizable Appearance**: Through Tailwind CSS, the modal's look and feel can be easily adjusted to fit your application's design system or branding requirements.
- **Predefined Styles**: Comes with predefined styles for the backdrop, modal box, header, content, and footer areas, which can be extended or overridden as needed.

## Events

The component emits events to signal user interactions and state changes, allowing for a reactive and interactive modal experience:

- **`close`**: Emitted when the modal is requested to close, whether by clicking outside the modal area or pressing the close button. You can listen to this event to trigger additional actions upon closing the modal, such as resetting form states or updating UI elements.

# Toast Notification Component Documentation

The Toast Notification component is a reusable Vue component designed to display toast notifications with different statuses such as default, success, warning, and error. It provides a simple and efficient way to give feedback to users after certain actions within the application.

## Features

- **Customizable Toasts**: Supports four types of toast statuses: default, success, warning, and error.
- **Auto-dismiss**: Toasts are automatically dismissed after a specified duration.
- **Dismiss on Demand**: Users can manually dismiss a toast at any time.
- **Queue Management**: Supports multiple toasts by queuing them and displaying them sequentially.

## Dependencies

- **Vue 3**: The component is built with Vue 3 composition API.
- **CVA**: For conditionally applying classes based on the toast status.
- **clsx**: A utility for constructing `className` strings conditionally.
- **nanoid**: For generating unique IDs for each toast.

## Files

- `v-toaster.vue`: The main toast component file.
- `use-toast.ts`: A composable that manages the state and logic of toasts.
- `App.vue`: Example usage within a Vue application.

## Project Structure

The project consists of the following key files:

- **`v-toaster.vue`**: The main Vue component file for rendering toast notifications. It handles the display logic and styling for different toast statuses.

- **`use-toast.ts`**: A Vue composable that encapsulates the logic for managing toast notifications. This includes adding, dismissing, and storing the state of toast messages.

- **`App.vue`**: This file demonstrates how to include the Toast component globally across your Vue application. By integrating the `VToasterVue` component here, it allows for the toast functionality to be accessible from any component within the app.


## Installation and Setup

1. **Install Dependencies**: Ensure Vue 3 is installed in your project. Additionally, install `cva`, `clsx`, and `nanoid` for class management and unique ID generation.

    ```bash
    npm install cva clsx nanoid
    # or
    yarn add cva clsx nanoid
    ```

2. **Global Component Setup**: To make the Toast component available throughout your application, import and declare it in your `App.vue`.

    ```vue
    <template>
      <RouterView />
      <Toaster />
    </template>

    <script setup>
    import Toaster from '@/components/toast/v-toaster.vue'
    </script>
    ```

## Usage

Utilize the `useToast` composable to interact with the toast notification system. This composable provides methods to display and dismiss toasts.

### Showing a Toast

```vue
<template>
  <button @click="showSuccessToast">Show Success Toast</button>
</template>

<script setup>
import { useToast } from '@/components/toast/use-toast'

const { toast } = useToast()

function showSuccessToast() {
  toast({
    text: 'Operation successful!',
    status: 'success',
  })
}
</script>
```

