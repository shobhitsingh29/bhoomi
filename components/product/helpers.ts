export type SelectedOptions = Record<string, string | null>;

export function getVariant(product: any, opts: SelectedOptions) {
  const variant = product.variants.find((variant: any) => {
    return Object.entries(opts).every(([key, value]) =>
      variant.options.find((option: any) => {
        if (
          option.__typename === "MultipleChoiceOption" &&
          option.displayName.toLowerCase() === key.toLowerCase()
        ) {
          return option.values.find(
            (v: any) => v.label.toLowerCase() === value
          );
        }
      })
    );
  });
  return variant;
}
