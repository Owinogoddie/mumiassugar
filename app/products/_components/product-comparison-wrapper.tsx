import dynamic from "next/dynamic";
import { ProductComparisonToolProps } from "./product-comparison"; // Make sure to export this type from your main component file

const DynamicComparisonTool = dynamic<ProductComparisonToolProps>(
  () => import("./product-comparison"),
  { ssr: false }
);

export const ProductComparisonTool = (props: ProductComparisonToolProps) => (
  <DynamicComparisonTool {...props} />
);
