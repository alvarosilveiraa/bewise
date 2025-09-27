import { RecordUnknown } from "@bewise/common/types/RecordUnknown";
import { Box } from "../Box";
import { Center } from "../Center";
import { GridProps } from "./Props";

export const Grid = <I extends RecordUnknown = RecordUnknown>({
  cols,
  data = [],
  Item,
  ...props
}: GridProps<I>) => {
  if (!cols || !data.length || !Item) return null;
  return (
    <Center gap={12} {...props}>
      {Array.from({ length: Math.ceil(data.length / cols) }).map((_, row) => {
        const startIndex = row * cols;
        const endIndex = startIndex + cols;
        const rowItems = data.slice(startIndex, endIndex);
        return (
          <Box
            key={`row-${row}`}
            display="flex"
            fDir="row"
            gap={props.gap || 12}
            w={`${(100 / cols) * rowItems.length}%`}
          >
            {rowItems.map((item, colIndex) => (
              <Box
                key={`col-${startIndex + colIndex}`}
                display="flex"
                fDir="row"
                flex={1}
              >
                <Item item={item} />
              </Box>
            ))}
          </Box>
        );
      })}
    </Center>
  );
};
