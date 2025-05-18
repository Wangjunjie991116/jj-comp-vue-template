import { VueConstructor } from 'vue';

export interface DemoButtonProps {
  type?: string;
  color?: string;
}

export interface DemoButtonInstance extends Vue {
  type: string;
  color?: string;
}

export interface DemoButtonConstructor extends VueConstructor {
  install: (Vue: VueConstructor) => void;
}

declare const DemoButton: DemoButtonConstructor;

declare const _default: {
  install: (Vue: VueConstructor) => void;
  version: string;
};

export { DemoButton };
export default _default;
