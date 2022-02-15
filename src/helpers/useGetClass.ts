export const getClass = (baseClass: string, options: Record<string, boolean>) => {
  const modifierKeys = Object.keys(options);
  
  return [
    baseClass,
    ...modifierKeys.filter((key: string) => options[key]).map((item: any) => `${baseClass}--${item}`
    ),
  ];
}