import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';

interface SkillIconProps {
  src: string;
  position: { top: number; left: number };
}

const SkillIcon: React.FC<SkillIconProps> = ({ src, position }) => {
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    let isMounted = true;

    const animateIcon = () => {
      if (!isMounted) return;

      const randomDelay = Math.random() * 5000; 
      const displayDuration = 3000 + Math.random() * 4000; 

      const fadeInTimeout = setTimeout(() => {
        if (!isMounted) return;
        setOpacity(1);
        setScale(1);

        const fadeOutTimeout = setTimeout(() => {
          if (!isMounted) return;
          setOpacity(0);
          setScale(0.8);

          animateIcon();
        }, displayDuration);

        return () => clearTimeout(fadeOutTimeout);
      }, randomDelay);

      return () => clearTimeout(fadeInTimeout);
    };

    animateIcon();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Box
      sx={{
        width: '80px',
        height: '80px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        opacity: opacity,
        transform: `scale(${scale})`,
        zIndex: 1, 
        '&:hover': {
          transform: `scale(${scale * 1.1})`,
        },
      }}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <Box
        component="img"
        src={src}
        alt="Skill Icon"
        sx={{
          width: '50px',
          height: '50px',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

const skillIconsList = [
  '/skillicons/aws.png',
  '/skillicons/docker.webp',
  '/skillicons/go.png',
  '/skillicons/helm.png',
  '/skillicons/kubernetes.png',
  '/skillicons/prometheus.png',
  '/skillicons/terraform.png',
  '/skillicons/typescript.png',
  '/skillicons/datadog.png',
  '/skillicons/gitlab.webp',
  '/skillicons/grpc.png',
  '/skillicons/javascript.png',
  '/skillicons/postgres.png',
  '/skillicons/swift.webp',
  '/skillicons/twilio.png',
];

const SkillIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme(); 
  const [iconPositions, setIconPositions] = useState<
    Array<{ top: number; left: number }>
  >([]);

  const skillIcons = React.useMemo(() => skillIconsList, []); 

  useEffect(() => {
    const calculatePositions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const iconSize = 80; 
        const positions: Array<{ top: number; left: number }> = [];

        const isOverlapping = (newPos: { top: number; left: number }) => {
          return positions.some(
            (pos) =>
              Math.abs(pos.top - newPos.top) < iconSize &&
              Math.abs(pos.left - newPos.left) < iconSize
          );
        };

        skillIcons.forEach(() => {
          let newPos;
          let attempts = 0;
          do {
            newPos = {
              top: Math.random() * (containerHeight - iconSize),
              left: Math.random() * (containerWidth - iconSize),
            };
            attempts++;
          } while (isOverlapping(newPos) && attempts < 100);
          positions.push(newPos);
        });

        setIconPositions(positions);
      }
    };

    calculatePositions();

    window.addEventListener('resize', calculatePositions);
    return () => {
      window.removeEventListener('resize', calculatePositions);
    };
  }, [skillIcons]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: theme.mixins.toolbar.minHeight, 
        right: 0,
        bottom: 0,
        width: '50%',
        overflow: 'hidden',
        zIndex: theme.zIndex.appBar - 1, 
      }}
    >
      {iconPositions.length === skillIcons.length &&
        skillIcons.map((icon, index) => (
          <SkillIcon
            key={icon}
            src={icon}
            position={iconPositions[index]}
          />
        ))}
    </Box>
  );
};

export default SkillIcons;
