const getClassName = (addClass, className) =>
  addClass ? className : '';

const getClasses = (classes)  =>
  classes && classes.length ? classes.filter(Boolean).join(' ') : undefined;

const getBooleanClasses = (props, theme) => {
  const classes = Object.keys(props).map(
    propName => (props[propName] ? theme[propName] : ''),
  );
  return getClasses(classes);
};

const getClassesAndBooleanClasses = (
  classes,
  booleanProps,
  theme,
) => getClasses([...classes, getBooleanClasses(booleanProps, theme)]);

export default {
  getClassesAndBooleanClasses,
  getBooleanClasses,
  getClassName,
  getClasses,
};
