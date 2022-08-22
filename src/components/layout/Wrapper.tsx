import classes from './Wrapper.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = (props: Props) => {
  return <div className={`${classes.wrapper} ${props.className}`}>{props.children}</div>;
};

export default Wrapper;
