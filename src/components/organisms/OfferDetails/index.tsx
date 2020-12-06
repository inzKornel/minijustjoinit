//external
import * as React from 'react';
import { Grid, Paper, Typography, makeStyles, Theme } from '@material-ui/core';

//internal
import { IOffer } from '@core/models/offer';
import VisualMap from '@components/organisms/VisualMap';
import SkillMeasure from '@src/components/atoms/SkillMeasure';

export interface IOfferDetails {
  offer: IOffer;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '4px 0 8px',
    padding: 16,
    background: theme.palette.background.paper,
  },
  infoContainer: {
    padding: '0 8px',
  },
  box: {
    background: theme.custom.palette.card?.main, //'#242424',
    padding: 16,
    color: theme.palette.text.primary,
    '&:not(:first-child):not(:last-child)': {
      margin: '8px 0',
    },
  },
  boxFlex: {
    display: 'flex',
  },
  justified: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  companyLogo: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginRight: 24,
  },
  salary: {
    color: theme.palette.success.main,
  },
  label: {
    fontSize: 12,
    padding: '0 12px 0 0',
  },
  mapContainer: {
    position: 'relative',
    padding: 0,
    minHeight: 480,
    [theme.breakpoints.up('md')]: {
      minHeight: 0,
    },
  },
  link: {
    color: theme.palette.info.main,
    fontSize: '12px',
    wordBreak: 'break-all',
  },
  titleWrapper: {
    width: '100%',
  },
  skillWrapper: {
    display: 'flex',
  },
}));

export interface ILabel extends React.HTMLAttributes<HTMLSpanElement> {}

function Label(props: ILabel) {
  return <span {...props}>{props.children}</span>;
}

function OfferDetails(props: IOfferDetails) {
  const { offer } = props;
  const classes = useStyles();

  return (
    <Grid xs={12} item>
      <Paper elevation={3} className={classes.root}>
        <Grid container spacing={2} className={classes.infoContainer}>
          <Grid xs={12} md={6} item>
            <Paper elevation={2} className={`${classes.box}  ${classes.justified} ${classes.column}`}>
              <div className={`${classes.justified} ${classes.titleWrapper}`}>
                <Typography variant='h6' component='h2'>
                  {offer.title}
                </Typography>
                <Typography variant='h6' component='h2' className={classes.salary}>
                  {offer.salary_from} - {offer.salary_to} {offer.salary_currency}
                </Typography>
              </div>
              <Typography variant='h6' component='h2'>
                <Label className={classes.label}>Experience:</Label> {offer.experience_level}
              </Typography>
              <div className={classes.skillWrapper}>
                {offer.skills.map((skill, index) => (
                  <SkillMeasure key={index} level={skill.level} title={skill.name} />
                ))}
              </div>
            </Paper>
            <Paper elevation={2} className={`${classes.box} ${classes.boxFlex}`}>
              <img src={offer.company_logo_url} alt='company logo' className={classes.companyLogo} />
              <div>
                <Typography variant='subtitle1' gutterBottom>
                  {offer.company_name}
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  <Label className={classes.label}> Size:</Label> {offer.company_size}
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  <Label className={classes.label}>Web:</Label>
                  <a href={offer.company_url} target='__blank' className={classes.link}>
                    {offer.company_url}
                  </a>
                </Typography>
              </div>
            </Paper>
            <Paper elevation={2} className={classes.box}>
              <Typography variant='subtitle1' gutterBottom>
                <Label className={classes.label}>Country:</Label> {offer.country_code}
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                <Label className={classes.label}>City:</Label> {offer.city}
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                <Label className={classes.label}> Street:</Label> {offer.street}
              </Typography>
            </Paper>
          </Grid>
          <Grid xs={12} md={6} className={classes.mapContainer} item>
            <VisualMap offers={[offer]} containerStyle={{ height: 'calc(100% - 16px)', width: 'calc(100% - 16px)' }} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default OfferDetails;
