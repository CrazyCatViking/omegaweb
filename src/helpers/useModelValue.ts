import { computed, WritableComputedRef } from 'vue';

export const useModelValue = <T = unknown>(
  props: Record<string, any>, 
  emit: (event: any, ...args: any[]) => void,
  name = 'modelValue'
): WritableComputedRef<T> => {
  return computed({
    get: () => props[name],
    set: (value) => emit(`update:${name}`, value),
  });
};