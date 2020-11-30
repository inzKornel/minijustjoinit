import * as React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { ICategory } from '@core/models/category';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface ICategoriesContainer {
  categories: ICategory[];
}

//TODO(K.S) Setup global theme. PLease dont use string variables as they are difficult to maintain
const useStyles = makeStyles({
  root: {
    margin: '8px 0 4px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    background: '#303030',
  },
  imageWrapper: {
    transition: 'transform .3s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.15)',
    },
  },
  image: {
    width: 40,
    borderRadius: '50%',
    padding: 10,
    background: '#424242',
    filter: 'grayscale(100%)',
    margin: '0 6px',
    transition: 'transform .3s',
  },
  title: {
    fontSize: 10,
    color: '#eeeeee',
    textAlign: 'center',
    margin: 0,
  },
  item: {
    textAlign: 'center',
  },
  active: {
    filter: 'none',
  },
});

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
            <Link href={`${process.env.BACKEND_URL}/all/${category.name}`} key={category.id}>
              <div className={classes.imageWrapper}>
                <img
                  alt='category image'
                  src={category.imageSrc}
                  className={`${classes.image}  ${isActive && classes.active} `}
                  style={{ ...(isActive ? { boxShadow: `0px 0px 16px 2px rgba(${category.color},0.9` } : {}) }}
                />
                <p className={classes.title} style={{ ...(isActive ? { color: `rgb(${category.color})` } : {}) }}>
                  {category.name}
                </p>
              </div>
            </Link>
          );
        })}
    </Paper>
  );
}

export default CategoriesContainer;
