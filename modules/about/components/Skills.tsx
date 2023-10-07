import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import { useMouseVariant } from '@/modules/customMouse';
import expressSVG from '@/public/svg/express.svg';
import framerMotionSVG from '@/public/svg/framermotion.svg';
import graphQLSVG from '@/public/svg/graphql.svg';
import mongoDBSVG from '@/public/svg/mongodb.svg';
import nestJSVG from '@/public/svg/nestjs.svg';
import nextSVG from '@/public/svg/nextjs.svg';
import nodeSVG from '@/public/svg/nodejs.svg';
import reactSVG from '@/public/svg/react.svg';
import redux from '@/public/svg/redux.svg';
import socketIoSVG from '@/public/svg/socketio.svg';
import tailwindSVG from '@/public/svg/tailwindcss.svg';
import typescriptSVG from '@/public/svg/typescript.svg';
import javascript from '@/public/svg/javascript.svg';
import webRTCSVG from '@/public/svg/webrtc.svg';
import antDesign from '@/public/svg/ant-design.svg';
import materialUi from '@/public/svg/material-ui.svg';
import reactNative from '@/public/svg/react-native.svg';
import reactQuery from '@/public/svg/react-query.svg';
import firebase from '@/public/svg/firebase.svg';

const SkillBadge = ({
  svg,
  name,
  className,
}: {
  svg: StaticImageData;
  name: string;
  className?: string;
}) => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={svg}
        alt={name}
        className={className || 'h-10 w-max md:h-12 lg:h-16'}
        priority
        onMouseEnter={() => setMouseVariant.technology(name)}
        onMouseLeave={setMouseVariant.default}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="mb-12 flex w-full flex-wrap items-center justify-center gap-10 px-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
      <SkillBadge svg={javascript} name="JavaScript" />
      <SkillBadge svg={typescriptSVG} name="TypeScript" />
      <SkillBadge svg={reactSVG} name="React.js" />
      <SkillBadge svg={reactNative} name="react native" />
      <SkillBadge svg={nextSVG} name="Next.js" />
      <SkillBadge svg={reactQuery} name="react query" />
      <SkillBadge svg={redux} name="redux.js" />
      <SkillBadge svg={firebase} name="firebase" />
      {/* <SkillBadge svg={nestJSVG} name="Nest.js" /> */}
      <SkillBadge svg={materialUi} name="material ui" />
      <SkillBadge svg={antDesign} name="ant design" />
      <SkillBadge
        svg={tailwindSVG}
        name="TailwindCSS"
        className="h-7 w-max lg:h-10"
      />
      <SkillBadge svg={expressSVG} name="Express.js" />
      <SkillBadge svg={nodeSVG} name="Node.js" />
      <SkillBadge svg={mongoDBSVG} name="MongoDB" />
      {/* <SkillBadge svg={graphQLSVG} name="GraphQL" /> */}
      {/* <SkillBadge svg={socketIoSVG} name="Socket.io" /> */}
      {/* <SkillBadge svg={framerMotionSVG} name="Framer-motion" /> */}
      {/* <SkillBadge svg={webRTCSVG} name="WebRTC" className="h-7 w-max lg:h-10" /> */}
    </div>
  );
};

export default Skills;
