import clsx from "clsx";

const Bounded = ({ Comp = "section", className, children, ...restProps }) => {
  return (
    <Comp
      className={clsx("px-4 first:py-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};

export default Bounded;
