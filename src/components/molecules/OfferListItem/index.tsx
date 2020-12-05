// external
import * as React from 'react';
import Link from 'next/link';
import { Badge, CardActions, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// internal core
import { IOffer } from '@core/models/offer';
import { getCategoryImage } from '@core/utils/categories';

// local
import Seniority from '@components/atoms/Seniority';
import City from '@components/atoms/City';
import { isSalary } from './utils';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    height: 260,
    background: theme.custom.palette.card?.main,
    transition: 'transform .2s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'transform .2s',
    },
  },
  content: {
    padding: '20px 10px',
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  companyName: {
    fontSize: 14,
    textAlign: 'center',
    padding: '12px 0 0',
  },
  salary: {
    fontSize: 14,
    textAlign: 'center',
    padding: '12px 0 0',
    color: theme.palette.success.main,
  },
  avatar: {
    padding: 4,
    width: '80%',
    height: 50,
    display: 'flex',
    margin: '0 auto',
    background: theme.palette.grey['50'],
    borderRadius: 4,
  },
  marker: {
    width: 25,
    height: 25,
  },
  bottomBar: {
    background: theme.custom.palette.opposite?.background,
    color: theme.custom.palette.opposite?.text,
  },
  position: {
    marginLeft: 0,
  },
}));

export interface IOfferListItem
  extends Pick<
    IOffer,
    | 'id'
    | 'title'
    | 'city'
    | 'remote'
    | 'experience_level'
    | 'salary_from'
    | 'salary_to'
    | 'company_name'
    | 'company_logo_url'
    | 'marker_icon'
    | 'salary_currency'
  > {}

function OfferListItem(props: IOfferListItem) {
  const {
    id,
    title,
    city,
    remote,
    experience_level,
    salary_from,
    salary_to,
    salary_currency,
    company_name,
    company_logo_url,
    marker_icon,
  } = props;
  const classes = useStyles();

  const renderSalary = (salary_from: number, salary_to: number) => {
    if (isSalary(salary_from) && isSalary(salary_to)) {
      return `${salary_from} - ${salary_to} ${salary_currency}`;
    }
    return 'Undisclosed salary';
  };

  const { color, imageSrc } = getCategoryImage(marker_icon);

  const renderContent = () => (
    <Link href={`/offers/${id}`}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <img
            className={classes.avatar}
            alt='Company logo'
            src={company_logo_url}
            style={{ boxShadow: `0px 0px 8px 2px rgb(${color})` }}
          />
          <Typography gutterBottom variant='h4' component='p' className={classes.companyName}>
            {company_name}
          </Typography>
          <Typography gutterBottom variant='h4' component='p' className={classes.salary}>
            {renderSalary(salary_from, salary_to)}
          </Typography>
          <Seniority level={experience_level} />
          <City city={city} />
        </CardContent>
        <CardActions className={classes.bottomBar}>
          <img src={imageSrc} className={classes.marker} />
          <Typography variant='caption'>{title}</Typography>
        </CardActions>
      </Card>
    </Link>
  );

  if (remote) {
    return (
      <Badge color='secondary' badgeContent='Remote!'>
        {renderContent()}
      </Badge>
    );
  }

  return renderContent();
}

export default OfferListItem;
