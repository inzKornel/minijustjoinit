import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export interface ISkillMeasure {
  title: string;
  level?: number;
  levels?: ILevels;
  maxLevel?: number;
}

interface ILevel {
  title: string;
  value: number;
}

interface ILevels {
  nicetohave: ILevel;
  junior: ILevel;
  regular: ILevel;
  advanced: ILevel;
  master: ILevel;
  [key: string]: ILevel; // ability to extends this
}

const initialLevels: ILevels = {
  nicetohave: {
    title: 'nice to have',
    value: 1,
  },
  junior: {
    title: 'junior',
    value: 2,
  },
  regular: {
    title: 'regular',
    value: 3,
  },
  advanced: {
    title: 'advanced',
    value: 4,
  },
  master: {
    title: 'master',
    value: 5,
  },
};

const useStyles = makeStyles({
  root: {
    padding: 10,
    '&:first-child': {
      padding: '10px 10px 10px 0',
    },
  },
  barsWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  skillBar: {
    display: 'inline-block',
    margin: '0 2px',
    width: 5,
    borderRadius: 8,
  },
  disabledBar: {
    background: 'linear-gradient(360deg, rgba(209,209,209,0.2) 17%, rgba(135,135,135,0.2) 99%)',
  },
  activeBar: {
    background: purple[500],
  },
  title: {
    margin: '2px 0 0',
    fontSize: 12,
    textAlign: 'center',
  },
  level: {
    margin: 0,
    fontSize: 12,
    textAlign: 'center',
  },
});

const initialBarHight = 5; //pixels

function SkillMeasure(props: ISkillMeasure) {
  const { levels, title, level = 1, maxLevel = 5 } = props;
  const classes = useStyles();
  const mergedLevels = Object.assign({}, initialLevels, levels);

  const getLevelLabel = (givenLevel: number) => {
    let titleResult = null;
    Object.keys(mergedLevels).find((key) => {
      const { value, title } = mergedLevels[key];
      if (value === givenLevel) {
        return (titleResult = title);
      }
    });
    return titleResult;
  };

  return (
    <div className={classes.root}>
      <div className={classes.barsWrapper}>
        {[...Array(maxLevel).keys()].map((_, index) => {
          return (
            <span
              key={index}
              className={`${classes.skillBar} ${index + 1 > level ? classes.disabledBar : classes.activeBar}`}
              style={{ height: (index + 1) * initialBarHight }}
            />
          );
        })}
      </div>
      <p className={classes.title}>{title}</p>
      <p className={classes.level}>{getLevelLabel(level)}</p>
    </div>
  );
}

export default SkillMeasure;
