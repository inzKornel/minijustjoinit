import * as React from 'react';
import { makeStyles } from '@material-ui/core';

interface ISeniorityColors {
  senior: string;
  mid: string;
  junior: string;
}
export interface ISeniority {
  level: 'senior' | 'mid' | 'junior';
  maxLevel?: number;
  colors?: ISeniorityColors;
  defaultDotColor?: string;
}

const defaultColors: ISeniorityColors = {
  junior: '#757575',
  mid: '#616161',
  senior: '#212121',
};

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

function Seniority({ level, colors, maxLevel = 6, defaultDotColor = '#e0e0e0' }: ISeniority) {
  const colorsMapped = Object.assign({}, defaultColors, colors);
  const classes = useStyles();
  const levelPascal = level[0].toUpperCase() + level.slice(1);

  const filLDotsIndex = levelIndexes[level] || 0;

  return (
    <div className={classes.root}>
      <p className={classes.paragraph}>{levelPascal}</p>
      {[...Array(maxLevel).keys()].map((_, index) => (
        <span
          key={index}
          className={classes.dot}
          style={{ background: index + 1 <= filLDotsIndex ? colorsMapped[level] : defaultDotColor }}
        />
      ))}
    </div>
  );
}

export default Seniority;
