import { makeStyles } from '@material-ui/core';
import * as React from 'react';

export interface ISeniority {
  level: 'senior' | 'mid' | 'junior';
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 12,
    paddingRight: 8,
  },
  dot: {
    height: 8,
    width: 8,
    margin: '0 2px',
    borderRadius: '50%',
    display: 'inline-block',
  },
});

const levelIndexes = {
  junior: 2,
  mid: 4,
  senior: 6,
};
const defaultDotColor = '#e0e0e0';

function Seniority({ level }: ISeniority) {
  const classes = useStyles();
  const levelPascal = level[0].toUpperCase() + level.slice(1);
  const getColor = () => {
    if (level === 'junior') return '#757575';
    if (level === 'mid') return '#616161';
    if (level === 'senior') return '#212121';
    return defaultDotColor;
  };
  const filLDotsIndex = levelIndexes[level] || 0;

  return (
    <div className={classes.root}>
      <p className={classes.paragraph}>{levelPascal}</p>
      {[...Array(6).keys()].map((_, index) => (
        <span
          key={index}
          className={classes.dot}
          style={{ background: index + 1 <= filLDotsIndex ? getColor() : defaultDotColor }}
        />
      ))}
    </div>
  );
}

export default Seniority;
