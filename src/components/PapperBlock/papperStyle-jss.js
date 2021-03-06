import { lighten } from '@material-ui/core/styles/colorManipulator';
const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(3),
    boxShadow: theme.shade.light,
    color: theme.palette.text.primary,
    '&$noMargin': {
      margin: 0,
    },
  }),
  descBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  titleText: {
    flex: 1,
  },
  title: {
    position: 'relative',
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 400,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontWeight: 600,
      marginBottom: theme.spacing(1),
    },
  },
  description: {
    maxWidth: 960,
    paddingTop: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  content: {
    marginTop: theme.spacing(2),
    padding: '3px',
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.background.default,
  },
  whiteBg: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
  },
  noMargin: {},
  colorMode: {
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    '& $title': {
      color: theme.palette.grey[100],
      '&:after': {
        borderBottom: `5px solid ${theme.palette.primary.light}`,
      },
    },
    '& $description': {
      color: theme.palette.grey[100],
    },
  },
  overflowX: {
    overflowX: 'auto',
  },
  iconTitle: {
    borderRadius: theme.rounded.small,
    border:
      theme.palette.type === 'dark'
        ? 'none'
        : `1px solid ${lighten(theme.palette.primary.dark, 0.9)}`,
    boxShadow: `0 2px 15px -5px ${theme.palette.primary.main}`,
    background:
      theme.palette.type === 'dark'
        ? theme.palette.primary.main
        : lighten(theme.palette.primary.light, 0.5),
    width: 48,
    height: 48,
    textAlign: 'center',
    lineHeight: '44px',
    verticalAlign: 'middle',
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& svg': {
      width: '60%',
      height: '60%',
      verticalAlign: 'middle',
      fill:
        theme.palette.type === 'dark'
          ? theme.palette.common.white
          : theme.palette.primary.main,
    },
  },
});

export default styles;
