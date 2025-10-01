"use client";

import { useEffect, useState } from "react";
import { Box } from "../Box";
import { Motion } from "../Motion";
import { Portal } from "../Portal";
import { Scroll } from "../Scroll";
import { ModalProps } from "./Props";

export const Modal = ({ open, onClose, children }: ModalProps) => {
  const [hidden, setHidden] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!open) {
      setTimeout(() => setHidden(true), 400);
      setAnimate(false);
    } else {
      setHidden(false);
      setTimeout(() => setAnimate(true), 100);
    }
  }, [open]);

  return (
    <Portal>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        items="center"
        justify="center"
        hidden={hidden}
      >
        <Motion
          cursor="default"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          initial={{ bg: "transparent" }}
          animate={animate ? { bg: "$foreground/0.4" } : {}}
          transition={{ duration: 300 }}
          onPress={onClose}
        />
        <Motion
          display="flex"
          p={24}
          bw={1}
          bc="$divider"
          bs="solid"
          bg="$background"
          w="80%"
          maxW={460}
          maxH="80%"
          radius={16}
          shadow={6}
          z={10}
          initial={{
            opacity: 0,
            transform: [{ scale: 0.8 }, { translateY: 100 }],
          }}
          animate={
            animate
              ? { opacity: 1, transform: [{ scale: 1 }, { translateY: 0 }] }
              : {}
          }
          transition={{ duration: 200 }}
        >
          <Scroll>{children}</Scroll>
        </Motion>
      </Box>
    </Portal>
  );
};
