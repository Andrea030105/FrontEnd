export default function Card({
  children,
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses =
    "bg-surface rounded-2xl p-4 flex flex-col items-center hover:cursor-pointer";

  const sizes = {
    sm: "min-w-60 min-h-40",
    md: "min-w-80 min-h-60",
  };

  const classes = `${baseClasses} ${sizes[size]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
