import { DefineComponent } from 'vue';

interface Props {
  color: string;
  message: string;
}

export const PfInput: DefineComponent;
export const PfButton: DefineComponent<{ props: Props }>;
