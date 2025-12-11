import React from "react";

/**
 * This example inspects children and maps based on child.type.displayName
 * NOT RECOMMENDED for public libs: fragile and minifiers can change names.
 */
function findChild(children, displayName) {
  return React.Children.toArray(children).find(child => {
    return child.type && child.type.displayName === displayName;
  });
}

export function CardTraversal({ children }) {
  const header = findChild(children, "CardHeader");
  const footer = findChild(children, "CardFooter");
  const body = findChild(children, "CardBody");

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8 }}>
      <div style={{ padding: 12 }}>{header}</div>
      <div style={{ padding: 12 }}>{body}</div>
      <div style={{ padding: 12, borderTop: "1px solid #eee" }}>{footer}</div>
    </div>
  );
}

export const CardHeader = ({ children }) => <>{children}</>;
CardHeader.displayName = "CardHeader";
export const CardBody = ({ children }) => <>{children}</>;
CardBody.displayName = "CardBody";
export const CardFooter = ({ children }) => <>{children}</>;
CardFooter.displayName = "CardFooter";