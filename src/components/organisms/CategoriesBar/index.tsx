//external
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles, Paper, Theme } from '@material-ui/core';

//internal
import { ICategory } from '@core/models/category';

export interface ICategoriesContainer {
  categories: ICategory[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '8px 0 4px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    background: theme.palette.background.paper,
  },
  image: {
    width: 40,
    borderRadius: '50%',
    padding: 10,
    background: theme.palette.background.default,
    filter: 'grayscale(100%)',
    margin: '0 6px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
    transition: 'transform .3s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.15)',
    },
  },
  title: {
    fontSize: 10,
    color: theme.palette.text.secondary,
    textAlign: 'center',
    margin: 0,
  },
  item: {
    textAlign: 'center',
  },
  active: {
    filter: 'none',
  },
}));

function CategoriesContainer(props: ICategoriesContainer) {
  const { categories } = props;
  const { asPath } = useRouter();
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      {categories &&
        categories.map((category) => {
          const isActive = asPath === `/all/${category.name}`;
          return (
            <Link href={`/all/${category.name}`} key={category.id}>
              <div>
                <img
                  alt='category image'
                  src={category.imageSrc}
                  className={`${classes.image}  ${isActive && classes.active} `}
                  style={{ ...(isActive ? { boxShadow: `0px 0px 16px 2px rgba(${category.color},0.9` } : {}) }}
                />
                <p className={classes.title}>{category.name}</p>
              </div>
            </Link>
          );
        })}
    </Paper>
  );
}

export default CategoriesContainer;
