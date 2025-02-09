import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends Omit<ThreeElements, "primitive"> {
        primitive: ThreeElements["primitive"] & { object: unknown };
      }
    }
  }
}
