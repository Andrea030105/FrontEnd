import { Loader2 } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  as = "button",
  to,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-2xl focus:outline-none focus:ring-2 hover:cursor-pointer";

  const variants = {
    primary: "bg-primary-blue hover:bg-blue-700 text-white focus:ring-blue-500",
    lightPrimary: "bg-white text-black hover:bg-gray-300  focus:ring-blue-500",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-blue-500",
    outlineBlu:
      "border border-primary-blue bg-transparent hover:bg-gray-50 text-primary-blue focus:ring-blue-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const disabledClasses =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

  if (as === "link") {
    return (
      <NavLink to={to} className={classes} {...props}>
        {loading && <Loader2 className="animate-spin" />}
        {children}
      </NavLink>
    );
  }

  if (as === "anchor") {
    return (
      <a href={to} className={classes} {...props}>
        {loading && <Loader2 className="animate-spin" />}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <Loader2 className="animate-spin" />}
      {children}
    </button>
  );
}
