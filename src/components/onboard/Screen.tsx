import Image, { StaticImageData } from "next/image";
import React, { PropsWithChildren, forwardRef } from "react";

type Props = {};

const ForwardScreen = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return <>{children}</>;
  }
);

ForwardScreen.displayName = "Screen";

interface LargeIconProps {
  img: StaticImageData;
}

const LargeIcon = ({ img }: LargeIconProps) => {
  return <Image src={img} alt="IMAGE" />;
};

const Button = ({ onClick, label }: { onClick: () => void; label: string }) => {
  return <button onClick={onClick}>{label}</button>;
};

const Title = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const Progress = () => {
  return <div></div>;
};

const Description = ({ description }: { description: string }) => {
  return <div>{description}</div>;
};

const Screen = Object.assign(ForwardScreen, {
  LargeIcon,
  Button,
  Title,
  Progress,
  Description,
});

export { LargeIcon, Button, Title, Progress, Description };

export default Screen;
